import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { arrayQueroDoar } from '../../../infoArrays/arrayQueroDoar';
import { InfoPanelComponent } from '../../components/info-panel/info-panel.component';

@Component({
  selector: 'app-wanna-donate',
  standalone: true,
  imports: [
    InfoPanelComponent,
  ],
  templateUrl: './wanna-donate.component.html',
  styleUrl: './wanna-donate.component.scss'
})
export class WannaDonateComponent {
  arrayQueroDoar = arrayQueroDoar;

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['../']);
  }
}
