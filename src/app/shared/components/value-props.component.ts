import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../core/services/reveal-on-scroll.directive';

@Component({
  selector: 'app-value-props',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './value-props.component.html',
  styleUrl: './value-props.component.scss'
})
export class ValuePropsComponent {
  props = [
    'Fast launch in 7-12 days',
    'Low-cost hosting and minimal yearly fees',
    'WhatsApp orders built into every plan',
    'SEO basics for local search visibility',
    'Mobile-first UI for 360px screens',
    'Simple admin for price and stock updates'
  ];
}
