import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OptionComponent } from './option.component';

@Component({
  imports: [CommonModule, OptionComponent],
  template: `
  <button (click)="onToggle()">
   {{name}} - Status: {{ status ? 'open' : 'close' }}
  </button>
  
  
  <div class="mt-4" *ngIf="status">
    <hr />
    <h3>Options</h3>

    <app-option [options]="options" />
  </div>
  
  
  `,
  selector: 'app-card',
  standalone: true,
})
export class CardComponent {
  @Input() name = '';
  @Input() options: {
    label: string;
    icon: string;
    action: () => void;
  }[] = [];

  status = false;

  onToggle() {
    this.status = !this.status;
  }
}
