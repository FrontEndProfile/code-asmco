import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../core/services/reveal-on-scroll.directive';

@Component({
  selector: 'app-faq-accordion',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './faq-accordion.component.html',
  styleUrl: './faq-accordion.component.scss'
})
export class FaqAccordionComponent {
  faqs = [
    {
      q: 'How much does a website cost?',
      a: 'We offer clear packages with one-time setup and optional light monthly maintenance. We keep recurring costs minimal and transparent.'
    },
    {
      q: 'How long does delivery take?',
      a: 'Most projects launch within 7-12 working days depending on content and approvals.'
    },
    {
      q: 'Do you provide hosting?',
      a: 'Yes, we set up low-cost hosting that is fast and easy to manage. You can also use your own hosting.'
    },
    {
      q: 'Can I update products or prices myself?',
      a: 'Yes. We provide a simple admin walkthrough and can also handle updates on demand.'
    },
    {
      q: 'Is WhatsApp ordering included?',
      a: 'Yes, every plan includes a WhatsApp CTA flow so customers can place orders quickly.'
    }
  ];

  openIndex = 0;

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? -1 : index;
  }
}
