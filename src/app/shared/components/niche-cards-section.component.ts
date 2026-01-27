import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../core/services/reveal-on-scroll.directive';

@Component({
  selector: 'app-niche-cards-section',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './niche-cards-section.component.html',
  styleUrl: './niche-cards-section.component.scss'
})
export class NicheCardsSectionComponent {
  niches = [
    {
      title: 'Perfumes & Fragrances',
      desc: 'Elegant catalogs with quick WhatsApp ordering.'
    },
    { title: 'Watches', desc: 'Clean product grids and fast filters.' },
    { title: 'Glasses & Optics', desc: 'Showcase collections with trust cues.' },
    { title: 'Makeup & Beauty', desc: 'Mobile-first layouts for daily shoppers.' },
    { title: 'Small Factories', desc: 'Product pages for B2B customer orders.' }
  ];
}
