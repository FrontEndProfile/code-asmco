import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Faq = {
  q: string;
  a: string;
};

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FaqsComponent {
  faqs: Faq[] = [
    {
      q: 'What tools / platforms do you use?',
      a: 'We typically design in Figma and ship production-ready UI. For builds we use modern stacks depending on your needs (e.g., Angular/React/Next). For content we can support CMS setups as well.',
    },
    {
      q: 'Do you accept payment plans?',
      a: 'Yes. For larger projects we can split payments into milestones (e.g., 50/25/25) depending on scope and timeline.',
    },
    {
      q: 'What is your price range?',
      a: 'It depends on complexity, pages, integrations, and timeline. After a short call, we share a clear fixed quote and deliverables.',
    },
    {
      q: 'I need design and development, do you do both?',
      a: 'Yes. We can handle full UI/UX + development, or work with your existing dev team and just provide design systems and screens.',
    },
  ];

  openIndex: number | null = 0; // first open (set null if you want all closed)

  toggle(i: number) {
    this.openIndex = this.openIndex === i ? null : i;
  }

  trackByIndex = (i: number) => i;
}
