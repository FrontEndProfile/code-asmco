import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DestroyRef, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs/operators';
import { gsap } from 'gsap';

export interface TransitionState {
  visible: boolean;
}

@Injectable({ providedIn: 'root' })
export class TransitionService {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly _state = signal<TransitionState>({ visible: false });
  readonly state = this._state.asReadonly();

  private overlayEl: HTMLElement | null = null;
  private exitTween: gsap.core.Tween | null = null;
  private holdTween: gsap.core.Tween | null = null;
  private activeNavId: number | null = null;
  private navInProgress = false;
  private pendingShow = false;
  private reduceMotion = false;

  constructor() {
    if (!this.isBrowser) return;

    this.reduceMotion =
      this.document?.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false;

    this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((event) => this.handleRouterEvent(event));
  }

  registerOverlay(element: HTMLElement): void {
    if (!this.isBrowser) return;
    this.overlayEl = element;
    gsap.set(this.overlayEl, { display: 'none', yPercent: 0, opacity: 1 });

    if (this.pendingShow && this.navInProgress) {
      this.showOverlay();
    }
  }

  clearOverlay(element: HTMLElement): void {
    if (this.overlayEl === element) {
      this.overlayEl = null;
    }
  }

  private handleRouterEvent(
    event: NavigationStart | NavigationEnd | NavigationCancel | NavigationError
  ): void {
    if (event instanceof NavigationStart) {
      this.activeNavId = event.id;
      this.navInProgress = true;
      this.pendingShow = true;
      this.showOverlay();
      return;
    }

    if (event instanceof NavigationEnd) {
      if (!this.isActiveNav(event.id)) return;
      this.navInProgress = false;
      if (!this._state().visible) {
        this.pendingShow = false;
        return;
      }
      this.scheduleExit();
      return;
    }

    if (event instanceof NavigationCancel || event instanceof NavigationError) {
      if (!this.isActiveNav(event.id)) return;
      this.navInProgress = false;
      this.pendingShow = false;
      this.hideOverlay();
    }
  }

  private showOverlay(): void {
    if (!this.overlayEl) return;
    this.clearTweens();

    this.pendingShow = false;
    this._state.set({ visible: true });
    gsap.set(this.overlayEl, { display: 'flex', yPercent: 0, opacity: 1 });
    this.lockScroll();
  }

  private scheduleExit(): void {
    if (!this.overlayEl) return;
    this.clearTweens();

    const holdMs = this.getCssMsVar('--transition-hold', 200);
    this.holdTween = gsap.delayedCall(holdMs / 1000, () => this.startExit());
  }

  private startExit(): void {
    if (!this.overlayEl) return;

    if (this.reduceMotion) {
      this.exitTween = gsap.to(this.overlayEl, {
        opacity: 0,
        duration: 0.12,
        ease: 'power1.out',
        onComplete: () => this.hideOverlay()
      });
      return;
    }

    const exitDuration = this.getCssMsVar('--transition-duration-exit', 1950);
    this.exitTween = gsap.to(this.overlayEl, {
      yPercent: -100,
      duration: exitDuration / 1000,
      ease: 'expo.inOut',
      onComplete: () => this.hideOverlay()
    });
  }

  private hideOverlay(): void {
    this.clearTweens();
    if (this.overlayEl) {
      gsap.set(this.overlayEl, { display: 'none', yPercent: 0, opacity: 1 });
    }
    this._state.set({ visible: false });
    this.unlockScroll();
  }

  private clearTweens(): void {
    if (this.exitTween) {
      this.exitTween.kill();
      this.exitTween = null;
    }

    if (this.holdTween) {
      this.holdTween.kill();
      this.holdTween = null;
    }
  }

  private lockScroll(): void {
    const body = this.document?.body;
    if (!body) return;
    body.classList.add('is-transitioning');
  }

  private unlockScroll(): void {
    const body = this.document?.body;
    if (!body) return;
    body.classList.remove('is-transitioning');
  }

  private isActiveNav(eventId: number): boolean {
    return this.activeNavId === eventId;
  }

  private getCssMsVar(name: string, fallback: number): number {
    const view = this.document?.defaultView;
    const root = this.document?.documentElement;
    if (!view || !root) return fallback;

    const raw = view.getComputedStyle(root).getPropertyValue(name).trim();
    if (!raw) return fallback;

    if (raw.endsWith('ms')) {
      const value = parseFloat(raw);
      return Number.isFinite(value) ? value : fallback;
    }

    if (raw.endsWith('s')) {
      const value = parseFloat(raw);
      return Number.isFinite(value) ? value * 1000 : fallback;
    }

    const value = Number(raw);
    return Number.isFinite(value) ? value : fallback;
  }
}
