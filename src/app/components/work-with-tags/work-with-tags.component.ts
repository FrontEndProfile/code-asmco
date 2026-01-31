import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type WorkTag = { label: string };

@Component({
  selector: 'app-work-with-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-with-tags.component.html',
  styleUrl: './work-with-tags.component.scss',
})
export class WorkWithTagsComponent {
  tags: WorkTag[] = [
    { label: 'Non-Profits' },
    { label: 'Small Businesses' },
    { label: 'Startups' },
    { label: 'Event Planners' },
    { label: 'Ecommerce Businesses' },
    { label: 'Agencies' },
    { label: 'Personal Brands' },
  ];

  hoveredIndex: number | null = null;

  onEnter(i: number) {
    this.hoveredIndex = i;
  }

  onLeave() {
    this.hoveredIndex = null;
  }

  isDim(i: number): boolean {
    return this.hoveredIndex !== null && this.hoveredIndex !== i;
  }
}
