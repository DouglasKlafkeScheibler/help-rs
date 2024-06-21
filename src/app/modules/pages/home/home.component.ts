import { Component } from '@angular/core';
import { InfoPanelComponent } from '../../components/info-panel/info-panel.component';
import { arrayNecessidades } from '../../../infoArrays/arrayNecessidades';
import { arrayOrientacoes } from '../../../infoArrays/arrayOrientacoes';
import { ToggleComponent } from '../../components/toggle/toggle.component';
import { CommonModule } from '@angular/common';
import { NeedHelpComponent } from '../../components/need-help/need-help.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ToggleComponent,
    NeedHelpComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  toggleIsGreen: boolean = false;

  onToggleChange(newState: boolean): void {
    this.toggleIsGreen = newState;
    console.log('Novo estado do toggle:', this.toggleIsGreen);
  }

  
}
