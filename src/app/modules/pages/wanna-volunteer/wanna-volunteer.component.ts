import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleComponent } from '../../components/toggle/toggle.component';
import { WannaVolunteerRemoteComponent } from '../../components/wanna-volunteer-remote/wanna-volunteer-remote.component';
import { WannaVolunteerInPersonComponent } from '../../components/wanna-volunteer-in-person/wanna-volunteer-in-person.component';

@Component({
  selector: 'app-wanna-volunteer',
  standalone: true,
  imports: [
    CommonModule,
    ToggleComponent,
    WannaVolunteerRemoteComponent,
    WannaVolunteerInPersonComponent,
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
