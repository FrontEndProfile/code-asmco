import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GsapService } from '../../core/services/gsap.service';
import { RevealOnScrollDirective } from '../../core/services/reveal-on-scroll.directive';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealOnScrollDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('heroSection', { static: true }) heroSection!: ElementRef<HTMLElement>;
  @ViewChild('heroShapes', { static: true }) heroShapes!: ElementRef<HTMLElement>;

  constructor(private gsapService: GsapService) {}

  async ngAfterViewInit(): Promise<void> {
    if (!this.gsapService.isBrowser || this.gsapService.prefersReducedMotion) {
      return;
    }

    const ready = await this.gsapService.init();
    if (!ready || !this.gsapService.gsap || !this.gsapService.scrollTrigger) {
      return;
    }

    const { gsap } = this.gsapService.gsap;
    const { ScrollTrigger } = this.gsapService.scrollTrigger;

    gsap.to(this.heroShapes.nativeElement, {
      y: -60,
      ease: 'none',
      scrollTrigger: {
        trigger: this.heroSection.nativeElement,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    ScrollTrigger.refresh();
  }
}
