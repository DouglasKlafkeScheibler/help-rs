import { Component } from '@angular/core';
import { InfoPanelComponent } from '../info-panel/info-panel.component';
import { arrayMonitoriamento } from '../../../infoArrays/arrayMonitoramento';
import { arrayRodovias } from '../../../infoArrays/arrayRodovias';
import { arrayUtilidades } from '../../../infoArrays/arrayUtilidades';
import { arrayContato } from '../../../infoArrays/arrayContato';
import { arrayResgate } from '../../../infoArrays/arrayResgate';
import { arrayAjuda } from '../../../infoArrays/arrayAjuda';
import { arrayAjudarImediato } from '../../../infoArrays/arrayAjudarImediato';

@Component({
  selector: 'app-wanna-help',
  standalone: true,
  imports: [
    InfoPanelComponent,
  ],
  templateUrl: './wanna-help.component.html',
  styleUrl: './wanna-help.component.scss'
})
export class WannaHelpComponent {
  arrayDoacao = arrayAjuda
  arrayMonitoriamento = arrayMonitoriamento;
  arrayRodovias = arrayRodovias;
  arrayUtilidades = arrayUtilidades;
  arrayContato = arrayContato;
  arrayResgate = arrayResgate;
  arrayAjudarImediato = arrayAjudarImediato
}
