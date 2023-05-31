import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [CommonModule],
  template: `
  <button
    *ngFor="let option of options" 
    (click)="option.action()">
    {{ option.label }} : {{ option.icon }}
    </button>
  `,
  selector: 'app-option',
  standalone: true,
})
export class OptionComponent {
  @Input() options: {
    label: string;
    icon: string;
    action: () => void;
  }[] = [];
}
