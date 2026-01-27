import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GsapService } from '../../core/services/gsap.service';
import { RevealOnScrollDirective } from '../../core/services/reveal-on-scroll.directive';
import { HomeContent, homeContent } from '../../content/home.content';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealOnScrollDirective],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePageComponent implements AfterViewInit {
  content: HomeContent = homeContent;
  activeTestimonialIndex = 0;
  openFaqIndex = -1;

  @ViewChild('heroShapes', { static: true }) heroShapes!: ElementRef<HTMLElement>;
  @ViewChild('heroSection', { static: true }) heroSection!: ElementRef<HTMLElement>;

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

    gsap.to(this.heroShapes.nativeElement, {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: this.heroSection.nativeElement,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  nextTestimonial(): void {
    this.activeTestimonialIndex =
      (this.activeTestimonialIndex + 1) % this.content.testimonials.items.length;
  }

  prevTestimonial(): void {
    this.activeTestimonialIndex =
      (this.activeTestimonialIndex - 1 + this.content.testimonials.items.length) %
      this.content.testimonials.items.length;
  }

  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? -1 : index;
  }

  get whatsappLink(): string {
    const message =
      'Hi ASMCO Tech, I need a website for my business. Please share packages.';
    return `https://wa.me/923134810105?text=${encodeURIComponent(message)}`;
  }
}
