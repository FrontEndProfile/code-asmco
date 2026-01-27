import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../core/services/reveal-on-scroll.directive';

interface WorkItem {
  title: string;
  category: string;
  result: string;
  image: string;
  srcset: string;
  alt: string;
}

@Component({
  selector: 'app-work-grid',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './work-grid.component.html',
  styleUrl: './work-grid.component.scss'
})
export class WorkGridComponent {
  works: WorkItem[] = [
    {
      title: 'Noor Scents',
      category: 'Perfume Catalog + WhatsApp Orders',
      result: '+34% WhatsApp inquiries',
      image: 'assets/images/work-1.jpg',
      srcset:
        'assets/images/work-1-640.jpg 640w, assets/images/work-1-1280.jpg 1280w',
      alt: 'Perfume brand product flat-lay'
    },
    {
      title: 'Atlas Watches',
      category: 'Luxury watch showcase',
      result: '2.3s average load time',
      image: 'assets/images/work-2.jpg',
      srcset:
        'assets/images/work-2-640.jpg 640w, assets/images/work-2-1280.jpg 1280w',
      alt: 'Premium watch product closeup'
    },
    {
      title: 'Crystal Optics',
      category: 'Eyewear product grid',
      result: 'Higher in-store visits',
      image: 'assets/images/work-3.jpg',
      srcset:
        'assets/images/work-3-640.jpg 640w, assets/images/work-3-1280.jpg 1280w',
      alt: 'Beauty products and accessories'
    },
    {
      title: 'Sialkot Works',
      category: 'Factory profile + catalog',
      result: 'B2B inquiry ready',
      image: 'assets/images/work-4.jpg',
      srcset:
        'assets/images/work-4-640.jpg 640w, assets/images/work-4-1280.jpg 1280w',
      alt: 'Factory workspace or equipment'
    }
  ];

  selectedWork?: WorkItem;

  open(work: WorkItem): void {
    this.selectedWork = work;
  }

  close(): void {
    this.selectedWork = undefined;
  }
}
