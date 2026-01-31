import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';

// IMPORTANT: register plugins
gsap.registerPlugin(ScrollTrigger, CSSPlugin);

@Component({
  selector: 'app-what-we-bring',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './what-we-bring.component.html',
  styleUrl: './what-we-bring.component.scss',
})
export class WhatWeBringComponent  implements AfterViewInit, OnDestroy {
  @ViewChild('section', { static: true }) sectionRef!: ElementRef<HTMLElement>;
  @ViewChild('imageWrap', { static: true }) imageWrapRef!: ElementRef<HTMLElement>;
  @ViewChild('imageEl', { static: true }) imageElRef!: ElementRef<HTMLImageElement>;

  private ctx?: gsap.Context;

  services = [
    {
      title: 'Web Design',
      items: ['Design Systems', 'Website Design', 'Landing Pages', 'User Experience Design'],
    },
    {
      title: 'Brand Design',
      items: ['Visual Design', 'Logos & Visual Identity', 'Social Media Graphics', 'Presentation Decks', 'Colors & Typography'],
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
    ngAfterViewInit(): void {
      // SSR-safe (Angular Universal / prerender / tests)
      if (!isPlatformBrowser(this.platformId)) return;

      const section = this.sectionRef.nativeElement;
      const img = this.imageElRef.nativeElement;

      this.ctx = gsap.context(() => {
        // initial
        gsap.set(img, {
          scale: 1.15,
          y: 18,
          transformOrigin: 'center center',
        });

        // parallax on scroll
        gsap.to(img, {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }, section);
    }

    ngOnDestroy(): void {
      this.ctx?.revert();
    }
}
