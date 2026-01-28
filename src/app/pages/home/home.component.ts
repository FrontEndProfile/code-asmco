import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { WhyChooseComponent } from "../../components/why-choose/why-choose.component";
import { SelectedWorkComponent } from "../../components/selected-work/selected-work.component";
import { ClientsLogoComponent } from "../../components/clients-logo/clients-logo.component";
import { HelpYouComponent } from "../../components/help-you/help-you.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { WorkWithTagsComponent } from "../../components/work-with-tags/work-with-tags.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, WhyChooseComponent, SelectedWorkComponent, ClientsLogoComponent, HelpYouComponent, TestimonialsComponent, WorkWithTagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
