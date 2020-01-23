import { Component, OnInit } from '@angular/core';

// Services
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _service: SettingsService) { }

  ngOnInit() {
    this.setCheck();
  }

  changeTheme(tsTheme: string, toLink: any) {
    this.checkTheme(toLink);
    this._service.applyTheme(tsTheme);
  }

  checkTheme(toLink: any) {
    const laSelectors: any = document.getElementsByClassName('selector');

    for (const ItmX of laSelectors) {
      ItmX.classList.remove('working');
    }

    toLink.classList.add('working');
  }

  setCheck() {
    const laSelectors: any = document.getElementsByClassName('selector');
    const lsTheme: string = this._service.settings.theme;

    for (const ItmX of laSelectors) {
      if (ItmX.getAttribute('data-theme') === lsTheme) {
        ItmX.classList.add('working');
        break;
      }
    }
  }
}
