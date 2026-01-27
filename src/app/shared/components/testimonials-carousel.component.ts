import { Component, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RevealOnScrollDirective } from '../../core/services/reveal-on-scroll.directive';

@Component({
  selector: 'app-testimonials-carousel',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './testimonials-carousel.component.html',
  styleUrl: './testimonials-carousel.component.scss'
})
export class TestimonialsCarouselComponent implements OnInit, OnDestroy {
  testimonials = [
    {
      quote:
        'We launched our perfume catalog in 9 days and started getting WhatsApp orders the same week.',
      name: 'Ayesha Khan',
      business: 'Perfume Boutique, Lahore'
    },
    {
      quote:
        'The site is light and fast on mobile. Customers can see our watches clearly and ask for prices easily.',
      name: 'Hassan Raza',
      business: 'Watch Retailer, Karachi'
    },
    {
      quote:
        'Low cost and no heavy yearly fees. The team understood our factory products quickly.',
      name: 'Bilal Ahmed',
      business: 'Small Factory, Sialkot'
    }
  ];

  currentIndex = 0;
  private intervalId?: number;
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = window.setInterval(() => this.next(), 6000);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId && isPlatformBrowser(this.platformId)) {
      window.clearInterval(this.intervalId);
    }
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }
}
