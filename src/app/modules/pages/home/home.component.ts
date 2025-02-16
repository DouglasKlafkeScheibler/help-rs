import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NeedHelpComponent } from '../../components/need-help/need-help.component';
import { ToggleComponent } from '../../components/toggle/toggle.component';
import { WannaHelpComponent } from '../../components/wanna-help/wanna-help.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ToggleComponent,
    NeedHelpComponent,
    WannaHelpComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  toggleIsGreen: boolean = true;

  onToggleChange(newState: boolean): void {
    this.toggleIsGreen = newState;
  }
}
