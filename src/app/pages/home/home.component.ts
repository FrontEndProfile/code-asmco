import { AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Lenis from 'lenis';
import { HeroComponent } from "../../components/hero/hero.component";
import { WhyChooseComponent } from "../../components/why-choose/why-choose.component";
import { SelectedWorkComponent } from "../../components/selected-work/selected-work.component";
import { ClientsLogoComponent } from "../../components/clients-logo/clients-logo.component";
import { HelpYouComponent } from "../../components/help-you/help-you.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { WorkWithTagsComponent } from "../../components/work-with-tags/work-with-tags.component";
import { WhatWeBringComponent } from "../../components/what-we-bring/what-we-bring.component";
import { MeetTheFounderComponent } from "../../components/meet-the-founder/meet-the-founder.component";
import { FaqsComponent } from "../../components/faqs/faqs.component";
import { FreeDesignAuditComponent } from "../../components/free-design-audit/free-design-audit.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, WhyChooseComponent, SelectedWorkComponent, ClientsLogoComponent, HelpYouComponent, TestimonialsComponent, WorkWithTagsComponent, WhatWeBringComponent, MeetTheFounderComponent, FaqsComponent, FreeDesignAuditComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private lenis: any;
  private rafId = 0;
  private scrollTriggers: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.initLenis();
    void this.bootstrapAnimations();
  }

  ngOnDestroy(): void {
    if (this.lenis?.destroy) this.lenis.destroy();
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.scrollTriggers.forEach((trigger) => trigger.kill?.());
  }

  private async bootstrapAnimations(): Promise<void> {
    const gsapModule = await import('gsap');
    const scrollModule = await import('gsap/ScrollTrigger');
    const gsap = gsapModule.gsap;
    const ScrollTrigger = scrollModule.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    this.initHeroReveal(gsap);
    this.initScrollReveals(gsap);
  }

  private initLenis(): void {
    this.lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,
    });

    const raf = (time: number) => {
      this.lenis.raf(time);
      this.rafId = requestAnimationFrame(raf);
    };

    this.rafId = requestAnimationFrame(raf);
  }

  private initHeroReveal(gsap: any): void {
    const heroItems = gsap.utils.toArray('.hero-copy > *') as HTMLElement[];
    const heroImage = document.querySelector('.hero-image');

    gsap.fromTo(
      heroItems,
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.08 }
    );

    if (heroImage) {
      gsap.fromTo(
        heroImage,
        { autoAlpha: 0, scale: 1.02 },
        { autoAlpha: 1, scale: 1, duration: 1, ease: 'power2.out', delay: 0.15 }
      );
    }
  }

  private initScrollReveals(gsap: any): void {
    const singleTargets = gsap.utils.toArray(
      '.why .why__eyebrow-text, .why .why__title, .work .title, .clients .headline, .help .heading, .help .media-frame, .t .chip, .t .quote, .t .by, .t .bottom, .ww .chip, .wb .chip, .wb .title, .mf .chip, .mf .title, .mf .body, .faq-title, .audit .kicker, .audit .title, .audit .pill'
    ) as HTMLElement[];

    singleTargets.forEach((el: HTMLElement) => {
      const trigger = gsap.fromTo(
        el,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      ).scrollTrigger;

      if (trigger) this.scrollTriggers.push(trigger);
    });

    const staggerBlocks = gsap.utils.toArray(
      '.why .grid, .work .grid, .clients .track, .help .list, .ww .cloud, .wb .bullets, .faq .faq-list, .audit .grid'
    ) as HTMLElement[];
    staggerBlocks.forEach((block: HTMLElement) => {
      const items = Array.from(block.children) as HTMLElement[];
      if (!items.length) return;

      const trigger = gsap.fromTo(
        items,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: block,
            start: 'top 85%',
          },
        }
      ).scrollTrigger;

      if (trigger) this.scrollTriggers.push(trigger);
    });
  }
}
