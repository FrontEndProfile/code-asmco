import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  workLinks = [
    { label: 'Adriano', href: '#work' },
    { label: 'Urban Wheels', href: '#work' },
  ];

  connectLinks = [
    { label: 'Email', href: '#contact' },
    { label: 'LinkedIn', href: '#contact' },
    { label: 'Instagram', href: '#contact' },
  ];
}
