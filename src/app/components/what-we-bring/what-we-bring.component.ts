import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type SkillBlock = {
  title: string;
  items: string[];
};

@Component({
  selector: 'app-what-we-bring',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './what-we-bring.component.html',
  styleUrl: './what-we-bring.component.scss',
})
export class WhatWeBringComponent {
  // image url tum khud replace kar lena (relative)
  imageUrl = 'assets/skills/skills-left.jpg';

  blocks: SkillBlock[] = [
    {
      title: 'Web Design',
      items: ['Design Systems', 'Website Design', 'Landing Pages', 'User Experience Design'],
    },
    {
      title: 'Brand Design',
      items: [
        'Visual Design',
        'Logos & Visual Identity',
        'Social Media Graphics',
        'Presentation Decks',
        'Colors & Typography',
      ],
    },
  ];
}
