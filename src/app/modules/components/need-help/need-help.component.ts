import { Component } from '@angular/core';
import { InfoPanelComponent } from '../info-panel/info-panel.component';
import { arrayNecessidades } from '../../../infoArrays/arrayNecessidades';
import { arrayOrientacoes } from '../../../infoArrays/arrayOrientacoes';

@Component({
  selector: 'app-need-help',
  standalone: true,
  imports: [
    InfoPanelComponent
  ],
  templateUrl: './need-help.component.html',
  styleUrl: './need-help.component.scss'
})
export class NeedHelpComponent {
  arrayNecessidades = arrayNecessidades;
  arrayOrientacoes = arrayOrientacoes;
}
