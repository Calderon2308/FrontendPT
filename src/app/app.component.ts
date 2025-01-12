import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  show = true

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    //this.show = true
  }

  async login() {
    this.show = false
    this.router.navigate(['login'])

  }
}
