import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

import gsap from 'gsap';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FaqsComponent implements AfterViewInit {
  faqs = [
    {
      q: 'What tools / platforms do you use?',
      a: 'I design primarily with Figma, but also use a range of other tools as needed. For CMS platforms, on e-commerce projects I prefer Shopify. For other projects, I use Wordpress or Webflow.',
    },
    {
      q: 'Do you accept payment plans?',
      a: 'Yes! Design is an investment, and I am happy to offer payment plans to allow you to pay comfortably.',
    },
    {
      q: 'What is your price range?',
      a: 'Keeping costs reasonable for clients is a priority. My rates vary depending on the needs of the project. That said, my most basic package starts at $600.',
    },
    {
      q: 'I need design and development, do you do both?',
      a: 'Yes! I work with talented and dedicated developers to bring my client’s vision to life. If you can think it, we can design and develop it.',
    },
  ];

  openIndex: number | null = 0; // first open like screenshot

  @ViewChildren('panels') panels!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit() {
    // set initial states
    queueMicrotask(() => {
      this.panels.forEach((ref, i) => {
        gsap.set(ref.nativeElement, { height: i === this.openIndex ? 'auto' : 0 });
      });
    });
  }

  toggle(i: number) {
    const prev = this.openIndex;
    this.openIndex = prev === i ? null : i;

    // close previous
    if (prev !== null && prev !== this.openIndex) {
      const prevEl = this.panels.get(prev)?.nativeElement;
      if (prevEl) {
        gsap.to(prevEl, { height: 0, duration: 0.35, ease: 'power2.out' });
      }
    }

    // open current
    if (this.openIndex !== null) {
      const el = this.panels.get(this.openIndex)?.nativeElement;
      if (!el) return;

      // if currently at 0 height, animate to auto
      gsap.to(el, { height: 'auto', duration: 0.45, ease: 'power2.out' });
    }
  }
}
