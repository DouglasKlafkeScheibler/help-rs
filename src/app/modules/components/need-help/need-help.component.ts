import { Component } from '@angular/core';
import { InfoPanelComponent } from '../info-panel/info-panel.component';
import { arrayNecessidades } from '../../../infoArrays/arrayNecessidades';
import { arrayOrientacoes } from '../../../infoArrays/arrayOrientacoes';
import { arrayMonitoriamento } from '../../../infoArrays/arrayMonitoramento';
import { arrayRodovias } from '../../../infoArrays/arrayRodovias';
import { arrayUtilidades } from '../../../infoArrays/arrayUtilidades';
import { arrayContato } from '../../../infoArrays/arrayContato';
import { arrayResgate } from '../../../infoArrays/arrayResgate';

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
  arrayMonitoriamento = arrayMonitoriamento;
  arrayRodovias = arrayRodovias;
  arrayUtilidades = arrayUtilidades;
  arrayContato = arrayContato;
  arrayResgate = arrayResgate;
}
