import { Component } from '@angular/core';
import { arrayVoluntarioRemoto } from '../../../infoArrays/arrayVoluntarioRemoto';
import { arrayProfissionais } from '../../../infoArrays/arrayProfissionais';
import { InfoPanelComponent } from '../info-panel/info-panel.component';

@Component({
  selector: 'app-wanna-volunteer-remote',
  standalone: true,
  imports: [
    InfoPanelComponent
  ],
  templateUrl: './wanna-volunteer-remote.component.html',
  styleUrl: './wanna-volunteer-remote.component.scss'
})
export class WannaVolunteerRemoteComponent {
  arrayVoluntarioRemoto = arrayVoluntarioRemoto;
  arrayProfissionais = arrayProfissionais;
}
