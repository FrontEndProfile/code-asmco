import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type HelpItem = {
  title: string;
  subtitle: string;
  image: string; // relative path
};

@Component({
  selector: 'app-help-you',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './help-you.component.html',
  styleUrl: './help-you.component.scss',
})
export class HelpYouComponent {
  items: HelpItem[] = [
    {
      title: 'Website Design, Development, & Maintenance',
      subtitle: 'E-commerce sites, marketing sites, and so much more',
      image: 'assets/help/help-1.jpg',
    },
    {
      title: 'Elevating your Digital Presence',
      subtitle: 'Web + Socials to keep your brand consistent and polished',
      image: 'assets/help/help-2.jpg',
    },
    {
      title: 'Branding Packages',
      subtitle: 'Clean, modern, consistent branding to enhance your organization’s visuals',
      image: 'assets/help/help-3.jpg',
    },
  ];

  activeIndex = 0;

  setActive(i: number): void {
    this.activeIndex = i;
  }
}
