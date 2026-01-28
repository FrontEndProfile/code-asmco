import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string; // relative path
};

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote:
        'With the help of ASMCO’s designs, our e-commerce site went from outdated and underused to an additional point of sale that has allowed us to reach customers virtually that we wouldn’t have been able to reach previously. At every step of the way ASMCO was professional, dedicated, and a complete pleasure to work with.',
      author: 'Santiago Guzmán',
      role: 'CEO',
      company: 'Adriano',
      avatar: 'assets/testimonials/avatar-1.jpg',
    },
    {
      quote:
        'The new website immediately felt premium. The structure is clean, the UX makes sense, and the final build loads fast. Communication was sharp and delivery was on time.',
      author: 'Ayesha Khan',
      role: 'Founder',
      company: 'Urban Wheels',
      avatar: 'assets/testimonials/avatar-2.jpg',
    },
    {
      quote:
        'Branding + web together changed everything—our presence looks consistent, polished, and trustworthy. We got better leads within the first two weeks of launch.',
      author: 'Michael Rivera',
      role: 'Director',
      company: 'Metropolitan Touring',
      avatar: 'assets/testimonials/avatar-3.jpg',
    },
  ];

  index = 0;

  get isFirst(): boolean {
    return this.index === 0;
  }

  get isLast(): boolean {
    return this.index === this.testimonials.length - 1;
  }

  prev(): void {
    if (this.isFirst) return;
    this.index -= 1;
  }

  next(): void {
    if (this.isLast) return;
    this.index += 1;
  }
}
