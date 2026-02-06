import { AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    Cal?: any;
  }
}

const CAL_NAMESPACE = '15min';
const CAL_ORIGIN = 'https://app.cal.com';
const CAL_LINK = 'front-end-rluqjs/15min';
const CAL_SCRIPT_SRC = 'https://app.cal.com/embed/embed.js';
const CAL_SCRIPT_ID = 'cal-embed-script';
const CAL_ELEMENT_SELECTOR = '#my-cal-inline-15min';

@Component({
  selector: 'app-lets-connect',
  standalone: true,
  imports: [],
  templateUrl: './lets-connect.component.html',
  styleUrl: './lets-connect.component.scss'
})
export class LetsConnectComponent implements AfterViewInit, OnDestroy {
  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.ensureCalScript();
    this.renderCalInline();
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;
    const host = document.querySelector(CAL_ELEMENT_SELECTOR);
    if (host) host.innerHTML = '';
  }

  private ensureCalScript(): void {
    const win = window as Window;

    if (!win.Cal) {
      (function (C: Window, A: string, L: string) {
        const p = function (a: any, ar: any) {
          a.q.push(ar);
        };
        const d = C.document;

        C.Cal = C.Cal || function () {
          const cal = C.Cal as any;
          const ar = arguments;
          cal.q = cal.q || [];
          cal.ns = cal.ns || {};

          if (!cal.loaded) {
            const script = d.createElement('script');
            script.id = CAL_SCRIPT_ID;
            script.src = A;
            script.async = true;
            d.head.appendChild(script);
            cal.loaded = true;
          }

          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            (api as any).q = (api as any).q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ['initNamespace', namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }

          p(cal, ar);
        };
      })(window, CAL_SCRIPT_SRC, 'init');

      return;
    }

    if (!document.getElementById(CAL_SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = CAL_SCRIPT_ID;
      script.src = CAL_SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
  }

  private renderCalInline(): void {
    const host = document.querySelector(CAL_ELEMENT_SELECTOR);
    if (!host) return;

    host.innerHTML = '';

    const cal = window.Cal;
    if (!cal) return;

    if (!cal.ns || !cal.ns[CAL_NAMESPACE]) {
      cal('init', CAL_NAMESPACE, { origin: CAL_ORIGIN });
    }

    cal.ns[CAL_NAMESPACE]('inline', {
      elementOrSelector: CAL_ELEMENT_SELECTOR,
      config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true', theme: 'light' },
      calLink: CAL_LINK,
    });

    cal.ns[CAL_NAMESPACE]('ui', {
      theme: 'light',
      cssVarsPerTheme: { dark: { 'cal-brand': '#242424' } },
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  }
}
