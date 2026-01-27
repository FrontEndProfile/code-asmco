import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealOnScrollDirective } from '../../core/services/reveal-on-scroll.directive';

@Component({
  selector: 'app-packages-cards',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealOnScrollDirective],
  templateUrl: './packages-cards.component.html',
  styleUrl: './packages-cards.component.scss'
})
export class PackagesCardsComponent {
  packages = [
    {
      name: 'Starter',
      price: 'Best for simple brand presence',
      highlight: false,
      items: [
        'Single-page or 4-section layout',
        'Mobile-first responsive design',
        'WhatsApp CTA integration',
        'Basic SEO + analytics setup'
      ]
    },
    {
      name: 'Growth',
      price: 'Catalog + WhatsApp ordering',
      highlight: true,
      items: [
        'Up to 20 catalog items',
        'Category filters + search',
        'WhatsApp order flow',
        'Speed optimization + SEO basics'
      ]
    },
    {
      name: 'Pro',
      price: 'Small eCommerce + SEO boost',
      highlight: false,
      items: [
        'Up to 60 products or SKUs',
        'Advanced catalog UX',
        'Performance + technical SEO',
        'Content update walkthrough'
      ]
    }
  ];
}
