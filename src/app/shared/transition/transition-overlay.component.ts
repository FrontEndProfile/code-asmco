import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
  inject
} from '@angular/core';
import { NgIf } from '@angular/common';
import { TransitionService } from './transition.service';

@Component({
  selector: 'app-transition-overlay',
  standalone: true,
  imports: [NgIf],
  templateUrl: './transition-overlay.component.html',
  styleUrl: './transition-overlay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransitionOverlayComponent implements AfterViewInit, OnDestroy {
  private readonly transition = inject(TransitionService);

  @ViewChild('overlay', { static: true })
  private overlayRef!: ElementRef<HTMLElement>;

  @Input() title = 'asmco · studio';
  @Input() subtitle = 'WEB  BRANDING  UI/UX';

  readonly state = this.transition.state;

  ngAfterViewInit(): void {
    this.transition.registerOverlay(this.overlayRef.nativeElement);
    
  }

  ngOnDestroy(): void {
    this.transition.clearOverlay(this.overlayRef.nativeElement);
  }
}
