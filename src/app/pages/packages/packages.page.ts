import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PackagesCardsComponent } from '../../shared/components/packages-cards.component';
import { ContactSectionComponent } from '../../shared/components/contact-section.component';
import { RevealOnScrollDirective } from '../../core/services/reveal-on-scroll.directive';

@Component({
  selector: 'app-packages-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    PackagesCardsComponent,
    ContactSectionComponent,
    RevealOnScrollDirective
  ],
  templateUrl: './packages.page.html',
  styleUrl: './packages.page.scss'
})
export class PackagesPageComponent {}
