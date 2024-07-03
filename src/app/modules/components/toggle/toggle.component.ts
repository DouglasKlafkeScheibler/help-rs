import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent {
  isGreenActive: boolean = true;

  @Output() toggleChange = new EventEmitter<boolean>();
  @Input() greenTitle: any;
  @Input() redTitle: any;

  toggle(isGreen: boolean): void {
    this.isGreenActive = isGreen;
    this.toggleChange.emit(this.isGreenActive);
  }
}
