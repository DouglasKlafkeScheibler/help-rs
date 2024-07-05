import { Component } from '@angular/core';
import { arrayVoluntarioPresencial } from '../../../infoArrays/arrayVoluntarioPresencial';
import { InfoPanelComponent } from '../info-panel/info-panel.component';
import { arrayVoluntarioPresencialReconstruindoRS } from '../../../infoArrays/arrayVoluntarioPresencialReconstruindoRS';
import { arrayVoluntarioPresencialProfissionais } from '../../../infoArrays/arrayVoluntarioPresencialProfissionais';

@Component({
  selector: 'app-wanna-volunteer-in-person',
  standalone: true,
  imports: [
    InfoPanelComponent,
  ],
  templateUrl: './wanna-volunteer-in-person.component.html',
  styleUrl: './wanna-volunteer-in-person.component.scss'
})
export class WannaVolunteerInPersonComponent {
  arrayVoluntarioPresencial = arrayVoluntarioPresencial;
  arrayVoluntarioPresencialReconstruindoRS = arrayVoluntarioPresencialReconstruindoRS;
  arrayVoluntarioPresencialProfissionais = arrayVoluntarioPresencialProfissionais;
}
