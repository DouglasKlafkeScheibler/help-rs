import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { first } from 'rxjs';

export interface DialogData {
  title: any
  arrayDialogData: any;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogContent,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})

export class DialogComponent {
  title = this.data.title
  arrayDialog = this.data.arrayDialogData
  
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: DialogData,
    public dialogRef: MatDialogRef<DialogComponent>
  ) {}

  goToLink(link: string) {
    const url = new URL(link);
    window.open(url.href);
  }  
}
