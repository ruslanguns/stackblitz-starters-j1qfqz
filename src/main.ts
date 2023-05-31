import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CardComponent } from './card.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
 
    <div class="cards">
      <app-card 
       *ngFor="let x of cards"
       [name]="x.name"
       [options]="x.options"
      />
    </div>
  `,
})
export class App {
  name = 'Angular';
  cards = [
    {
      name: 'Card A',
      options: [
        {
          label: 'Option A',
          icon: '🎉',
          action: () => console.log('Option A'),
        },
      ],
    },
    {
      name: 'Card B',
      options: [
        {
          label: 'Option 1',
          icon: '🤔',
          action: () => console.log('Option 1'),
        },
      ],
    },
  ];
}

bootstrapApplication(App);
