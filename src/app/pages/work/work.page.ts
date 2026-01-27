import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkGridComponent } from '../../shared/components/work-grid.component';
import { RevealOnScrollDirective } from '../../core/services/reveal-on-scroll.directive';

@Component({
  selector: 'app-work-page',
  standalone: true,
  imports: [CommonModule, WorkGridComponent, RevealOnScrollDirective],
  templateUrl: './work.page.html',
  styleUrl: './work.page.scss'
})
export class WorkPageComponent {}
