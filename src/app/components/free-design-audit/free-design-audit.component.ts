import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-free-design-audit',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './free-design-audit.component.html',
  styleUrl: './free-design-audit.component.scss',
})
export class FreeDesignAuditComponent {}
