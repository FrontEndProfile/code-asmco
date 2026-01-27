import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../core/services/reveal-on-scroll.directive';

@Component({
  selector: 'app-process-timeline',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './process-timeline.component.html',
  styleUrl: './process-timeline.component.scss'
})
export class ProcessTimelineComponent {
  steps = [
    {
      title: 'Discover',
      desc: 'Short call to understand products, customers, and budget.'
    },
    {
      title: 'Design',
      desc: 'Wireframes and a clean visual direction in 2-3 days.'
    },
    {
      title: 'Build',
      desc: 'Responsive build with WhatsApp order flow.'
    },
    {
      title: 'Launch',
      desc: 'Speed checks, SEO basics, and go-live support.'
    },
    {
      title: 'Support',
      desc: 'Light monthly maintenance or on-demand updates.'
    }
  ];
}
