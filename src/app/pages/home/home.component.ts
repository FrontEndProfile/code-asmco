import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { WhyChooseComponent } from "../../components/why-choose/why-choose.component";
import { SelectedWorkComponent } from "../../components/selected-work/selected-work.component";
import { ClientsLogoComponent } from "../../components/clients-logo/clients-logo.component";
import { HelpYouComponent } from "../../components/help-you/help-you.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { WorkWithTagsComponent } from "../../components/work-with-tags/work-with-tags.component";
import { WhatWeBringComponent } from "../../components/what-we-bring/what-we-bring.component";
import { MeetTheFounderComponent } from "../../components/meet-the-founder/meet-the-founder.component";
import { FaqsComponent } from "../../components/faqs/faqs.component";
import { FreeDesignAuditComponent } from "../../components/free-design-audit/free-design-audit.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, WhyChooseComponent, SelectedWorkComponent, ClientsLogoComponent, HelpYouComponent, TestimonialsComponent, WorkWithTagsComponent, WhatWeBringComponent, MeetTheFounderComponent, FaqsComponent, FreeDesignAuditComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
