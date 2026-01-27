import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class GsapService {
  private platformId = inject(PLATFORM_ID);
  private gsapModule: typeof import('gsap') | null = null;
  private scrollTriggerModule: typeof import('gsap/ScrollTrigger') | null = null;

  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  get prefersReducedMotion(): boolean {
    if (!this.isBrowser) {
      return true;
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  async init(): Promise<boolean> {
    if (!this.isBrowser || this.prefersReducedMotion) {
      return false;
    }

    if (this.gsapModule && this.scrollTriggerModule) {
      return true;
    }

    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]);

    gsap.registerPlugin(ScrollTrigger);
    this.gsapModule = { gsap } as typeof import('gsap');
    this.scrollTriggerModule = { ScrollTrigger } as typeof import('gsap/ScrollTrigger');

    return true;
  }

  get gsap(): typeof import('gsap') | null {
    return this.gsapModule;
  }

  get scrollTrigger(): typeof import('gsap/ScrollTrigger') | null {
    return this.scrollTriggerModule;
  }
}
