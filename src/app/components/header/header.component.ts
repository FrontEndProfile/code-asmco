import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // ESC to close (pro UX)
  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.closeMenu();
  }

  // If user resizes to desktop, close drawer
  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 960 && this.isMenuOpen) this.closeMenu();
  }
}
