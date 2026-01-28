import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type TagItem = { text: string; isDot?: boolean };

@Component({
  selector: 'app-work-with-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-with-tags.component.html',
  styleUrl: './work-with-tags.component.scss',
})
export class WorkWithTagsComponent {
  activeIndex: number | null = null;

  // exactly like screenshot: words + red dots between
  items: TagItem[] = [
    { text: 'Non-Profits' }, { text: '•', isDot: true },
    { text: 'Small Businesses' }, { text: '•', isDot: true },
    { text: 'Startups' }, { text: '•', isDot: true },
    { text: 'Event Planners' }, { text: '•', isDot: true },
    { text: 'Ecommerce Businesses' }, { text: '•', isDot: true },
    { text: 'Agencies' }, { text: '•', isDot: true },
    { text: 'Personal Brands' },
  ];

  setActive(i: number | null) {
    this.activeIndex = i;
  }
}
