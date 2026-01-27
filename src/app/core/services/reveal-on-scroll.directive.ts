import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  inject
} from '@angular/core';
import { GsapService } from './gsap.service';

@Directive({
  selector: '[revealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input()
  revealOnScroll: 'fade-up' | 'fade-in' | 'fade-left' | 'stagger-children' =
    'fade-up';
  @Input() staggerSelector = '';
  @Input() once = true;

  private element = inject(ElementRef<HTMLElement>);
  private gsapService = inject(GsapService);
  private observer?: IntersectionObserver;

  async ngAfterViewInit(): Promise<void> {
    if (!this.gsapService.isBrowser) {
      return;
    }

    const el = this.element.nativeElement;
    el.classList.add('reveal');
    if (this.revealOnScroll === 'stagger-children') {
      el.classList.add('reveal-stagger');
    }

    if (this.gsapService.prefersReducedMotion) {
      el.classList.add('is-inview');
      return;
    }

    if (this.revealOnScroll === 'stagger-children' && !this.staggerSelector) {
      this.staggerSelector = ':scope > *';
    }

    const gsapReady = await this.gsapService.init();
    if (gsapReady && this.gsapService.gsap) {
      const { gsap } = this.gsapService.gsap;
      const targets = this.staggerSelector
        ? (el.querySelectorAll(this.staggerSelector) as NodeListOf<HTMLElement>)
        : el;

      const base = {
        opacity: 0,
        y: this.revealOnScroll === 'fade-up' ? 30 : 0,
        x: this.revealOnScroll === 'fade-left' ? -24 : 0,
        scale: 1,
        filter: 'blur(6px)'
      };

      gsap.from(targets, {
        ...base,
        duration: 0.9,
        ease: 'power2.out',
        stagger: this.staggerSelector ? 0.12 : 0,
        immediateRender: false,
        clearProps: 'filter',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: this.once
        }
      });
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-inview');
          if (this.once) {
            this.observer?.disconnect();
          }
        }
      },
      { threshold: 0.2 }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
