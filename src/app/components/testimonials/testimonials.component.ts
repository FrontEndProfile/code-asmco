import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

type Testimonial = {
  quoteHtml: string;     // use <strong> inside
  authorLine: string;    // "-Name, Title at Company"
  avatar: string;
  avatarAlt: string;
};

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      quoteHtml:
        '“Julia was enthusiastic and <strong>ready to jump right in to several projects ranging from UI and visual design to QA work on some of our mobile applications.</strong> Julia worked well with the team, and was also able to work autonomously when needed. I look forward to seeing what Julia\'s next UX endeavor will be!”',
      authorLine:
        '-Sara Mastro, VP, Operations and Product Management at Perceptronics Solutions, Inc',
      avatar:
        'https://cdn.prod.website-files.com/68f32de327233c470b1e6a87/6929f88d658092862432b27e_client%20image-1.avif',
      avatarAlt: 'Client photo',
    },
    {
      quoteHtml:
        '“With the help of Julia’s designs, <strong>our e-commerce site went from outdated, and underused to an additional point of sale that has allowed us to reach customers virtually that we wouldn’t have been able to reach previously.</strong> At every step of the way Julia was professional, dedicated, and a complete pleasure to work with.”',
      authorLine: '-Santiago Guzmán, CEO, Adriano',
      avatar:
        'https://cdn.prod.website-files.com/68f32de327233c470b1e6a87/6929f88d8e9ff6a515c1a403_client%20image.avif',
      avatarAlt: 'Client photo',
    },
    {
      quoteHtml:
        '“Julia is a very talented and hard-working designer... <strong>We found Julia to be extremely professional and easy to work with. Without question, we would hire her again.”</strong>',
      authorLine: '-Helen Wood, Conservation Montgomery Board Member',
      avatar:
        'https://cdn.prod.website-files.com/68f32de327233c470b1e6a87/6929f88dfda9ac362e189272_client%20image-2.avif',
      avatarAlt: 'Client photo',
    },
  ];

  // We duplicate slides at both ends for seamless loop
  loopedSlides: Testimonial[] = [];

  // activeIndex = real index (0..n-1)
  activeIndex = 0;

  // currentLoopIndex = index in loopedSlides we are showing
  // starts at 1 because [0] is last clone
  currentLoopIndex = 1;

  isAnimating = false;

  // Translate based on loop index
  get trackTransform(): string {
    return `translate3d(${-this.currentLoopIndex * 100}%, 0, 0)`;
  }

  ngOnInit(): void {
    this.buildLoop();
  }

  private buildLoop(): void {
    const n = this.testimonials.length;
    if (n === 0) {
      this.loopedSlides = [];
      return;
    }

    const first = this.testimonials[0];
    const last = this.testimonials[n - 1];

    // [lastClone, ...real, firstClone]
    this.loopedSlides = [last, ...this.testimonials, first];

    this.activeIndex = 0;
    this.currentLoopIndex = 1; // show first real slide
  }

  next(): void {
    if (this.isAnimating || this.testimonials.length <= 1) return;
    this.isAnimating = true;
    this.currentLoopIndex += 1;
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  prev(): void {
    if (this.isAnimating || this.testimonials.length <= 1) return;
    this.isAnimating = true;
    this.currentLoopIndex -= 1;
    this.activeIndex =
      (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  onTransitionEnd(): void {
    // If we moved to clones, jump (no animation) to the real slide
    const n = this.testimonials.length;

    // went past last real (landed on firstClone at index n+1)
    if (this.currentLoopIndex === n + 1) {
      this.isAnimating = false;
      // jump to first real slide (index 1)
      this.currentLoopIndex = 1;
      // force reflow not required because we removed transition via class binding
      return;
    }

    // went before first real (landed on lastClone at index 0)
    if (this.currentLoopIndex === 0) {
      this.isAnimating = false;
      // jump to last real slide (index n)
      this.currentLoopIndex = n;
      return;
    }

    this.isAnimating = false;
  }

  trackByIndex = (i: number) => i;

  // Keyboard navigation
  @HostListener('window:keydown', ['$event'])
  onKeydown(e: KeyboardEvent): void {
    if (e.key === 'ArrowRight') this.next();
    if (e.key === 'ArrowLeft') this.prev();
  }
}
