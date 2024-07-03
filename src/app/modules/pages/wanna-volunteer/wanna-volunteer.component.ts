import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleComponent } from '../../components/toggle/toggle.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wanna-volunteer',
  standalone: true,
  imports: [
    CommonModule,
    ToggleComponent,
  ],
  templateUrl: './wanna-volunteer.component.html',
  styleUrl: './wanna-volunteer.component.scss'
})
export class WannaVolunteerComponent {
  toggleIsGreen: boolean = true;

  constructor(private router: Router) { }

  onToggleChange(newState: boolean): void {
    this.toggleIsGreen = newState;
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
