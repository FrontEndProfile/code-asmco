import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  isMenuOpen = false;

  @ViewChild('mobileMenu', { static: false }) mobileMenu!: ElementRef<HTMLElement>;
  @ViewChild('hamburger', { static: false }) hamburger!: ElementRef<HTMLElement>;
  @ViewChild('lineTop', { static: false }) lineTop!: ElementRef<HTMLElement>;
  @ViewChild('lineMid', { static: false }) lineMid!: ElementRef<HTMLElement>;
  @ViewChild('lineBot', { static: false }) lineBot!: ElementRef<HTMLElement>;

  private menuTl?: gsap.core.Timeline;

  ngAfterViewInit(): void {
    // mobile menu closed state
    gsap.set(this.mobileMenu.nativeElement, { autoAlpha: 0, y: -8, pointerEvents: 'none' });

    // IMPORTANT: GSAP controls the 3-line layout (no CSS translateY)
    gsap.set(this.lineTop.nativeElement, { y: -6, rotation: 0, opacity: 1 });
    gsap.set(this.lineMid.nativeElement, { y: 0, rotation: 0, opacity: 1 });
    gsap.set(this.lineBot.nativeElement, { y: 6, rotation: 0, opacity: 1 });

    this.menuTl = gsap.timeline({
      paused: true,
      defaults: { ease: 'power2.out', duration: 0.22 },
    });

    this.menuTl
      // hamburger -> X (center-locked)
      .to(this.lineTop.nativeElement, { y: 0, rotation: 45 }, 0)
      .to(this.lineMid.nativeElement, { opacity: 0 }, 0)
      .to(this.lineBot.nativeElement, { y: 0, rotation: -45 }, 0)

      // dropdown
      .to(this.mobileMenu.nativeElement, { autoAlpha: 1, y: 0, pointerEvents: 'auto', duration: 0.20 }, 0.05)

      // links stagger
      .fromTo(
        this.mobileMenu.nativeElement.querySelectorAll('.m-link'),
        { y: 10, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, stagger: 0.05, duration: 0.16 },
        0.08
      )
      .fromTo(
        this.mobileMenu.nativeElement.querySelector('.m-cta'),
        { y: 10, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.16 },
        0.18
      );
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.menuTl) return;

    if (this.isMenuOpen) this.menuTl.play();
    else this.menuTl.reverse();
  }

  closeMenu(): void {
    if (!this.isMenuOpen) return;
    this.isMenuOpen = false;
    this.menuTl?.reverse();
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.closeMenu();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 992) this.closeMenu();
  }
}
