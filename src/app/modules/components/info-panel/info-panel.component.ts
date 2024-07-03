import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-panel',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './info-panel.component.html',
  styleUrl: './info-panel.component.scss'
})
export class InfoPanelComponent {
  @Input() title: any;
  @Input() arrayTips: any;

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) {}

  goToLinkOrDialog(link: string, dialog: any, path: string) {
    if (dialog) {
      this.openDialog(dialog)
    } else if (link) {
      const url = new URL(link);
      window.open(url.href);
    } else if (path) {
      this.router.navigate([path]);
    }
  }

  openDialog(arrayDialog: any) {
    var dialogTitle

    arrayDialog.subscribe((data: any[]) => {
       dialogTitle = data[0].title;
    });

    this.dialog.open(DialogComponent, {
      data: {
        title: dialogTitle,
        arrayDialogData: arrayDialog
      },
      width: '500px',
      height: '500px'
    });
  }
}
