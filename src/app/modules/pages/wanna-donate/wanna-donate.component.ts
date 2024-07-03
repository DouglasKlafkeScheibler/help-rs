import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wanna-donate',
  standalone: true,
  imports: [],
  templateUrl: './wanna-donate.component.html',
  styleUrl: './wanna-donate.component.scss'
})
export class WannaDonateComponent {
  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['../']);
  }
}
