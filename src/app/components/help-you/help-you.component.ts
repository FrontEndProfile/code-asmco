import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type HelpItem = {
  title: string;
  subtitle: string;
  image: string;
};

@Component({
  selector: 'app-help-you',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './help-you.component.html',
  styleUrl: './help-you.component.scss',
})
export class HelpYouComponent {
  // NOTE: If your local assets are not loading, use these URLs temporarily
  // to confirm UI is correct. Then replace with your assets paths.
  items: HelpItem[] = [
    {
      title: 'Website Design, Development, & Maintenance',
      subtitle: 'E-commerce sites, marketing sites, and so much more',
      image:
        'https://cdn.prod.website-files.com/68f32de327233c470b1e6a87/68f36a5a504a85f461e07738_service%20image-1.avif',
    },
    {
      title: 'Elevating your Digital Presence',
      subtitle: 'Web + Socials to keep your brand consistent and polished',
      image:
        'https://cdn.prod.website-files.com/68f32de327233c470b1e6a87/68f36a5b0df028e0769d555e_service%20image.avif',
    },
    {
      title: 'Branding Packages',
      subtitle: 'Clean, modern, consistent branding to enhance your organization’s visuals',
      image:
        'https://cdn.prod.website-files.com/68f32de327233c470b1e6a87/68f36a5a9039ffc9b84e727d_service%20image-2.avif',
    },
  ];

  activeIndex = 0;

  setActive(i: number): void {
    this.activeIndex = i;
  }
}
