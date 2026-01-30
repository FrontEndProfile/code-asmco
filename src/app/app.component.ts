import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const markLoaded = () => {
      const tags = Array.from(document.querySelectorAll<HTMLElement>('.loader_tag'));
      tags.forEach((tag, index) => {
        tag.style.visibility = 'visible';
        tag.style.opacity = '1';
        tag.style.transition = 'opacity 0.4s ease';
        tag.style.transitionDelay = `${index * 0.12}s`;
      });

      window.setTimeout(() => {
        document.body.classList.remove('is-loading');
        document.body.classList.add('is-loaded');
      }, 600);
    };

    if (document.readyState === 'complete') {
      markLoaded();
    } else {
      window.addEventListener('load', markLoaded, { once: true });
    }
  }
}
