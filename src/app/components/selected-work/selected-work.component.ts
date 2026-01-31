import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-selected-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-work.component.html',
  styleUrl: './selected-work.component.scss'
})
export class SelectedWorkComponent implements AfterViewInit {
  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef<HTMLElement>>;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const els = this.revealEls?.toArray().map(x => x.nativeElement) ?? [];

    if (!els.length) {
      // if this logs, you forgot #revealEl in template
      console.warn('[SelectedWork] No reveal elements found. Add #revealEl on cards.');
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      els.forEach(el => el.classList.add('is-inview'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('is-inview');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    els.forEach(el => io.observe(el));
  }
}
