import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-free-design-audit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './free-design-audit.component.html',
  styleUrl: './free-design-audit.component.scss',
})
export class FreeDesignAuditComponent {
  cards = [
    {
      num: '01',
      text: 'Comprehensive and detailed analysis of your landing page or brand.',
    },
    {
      num: '02',
      text: '15-minute chat to discuss weaknesses and potential solutions.',
    },
  ];
}
