import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealOnScrollDirective } from '../../core/services/reveal-on-scroll.directive';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealOnScrollDirective],
  templateUrl: './services.page.html',
  styleUrl: './services.page.scss'
})
export class ServicesPageComponent {
  services = [
    {
      title: 'Landing Pages',
      desc: 'Single page that drives calls and WhatsApp orders.'
    },
    {
      title: 'Small eCommerce (Catalog + WhatsApp)',
      desc: 'Product grid with instant WhatsApp checkout flow.'
    },
    {
      title: 'Business Websites',
      desc: 'Multi-page sites for trust and B2B credibility.'
    },
    {
      title: 'Maintenance',
      desc: 'Light monthly updates, backups, and uptime checks.'
    },
    {
      title: 'SEO Basics',
      desc: 'Metadata, local keywords, and structure for discoverability.'
    }
  ];
}
