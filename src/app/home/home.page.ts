import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  darkModeEnable: boolean = true;

  constructor() { }

  toggleDarkMode(): void {
    document.documentElement.classList.toggle("ion-palette-dark", this.darkModeEnable);
  }

}
