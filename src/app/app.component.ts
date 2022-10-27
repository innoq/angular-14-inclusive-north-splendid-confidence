import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'da-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public router: Router) {}

  goToDetails(): void {
    this.router.navigate(['shipments', 'details']);
  }
}
