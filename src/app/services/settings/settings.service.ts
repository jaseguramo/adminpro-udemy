import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    urlTheme: 'assets/css/colors/default.css',
    theme: 'default'
  }

  constructor(@Inject(DOCUMENT) private _document) {
    this.loadSettings();
  }

  applyTheme(tsTheme: string) {
    const lsUrl: string = `assets/css/colors/${ tsTheme }.css`;
    this._document.getElementById('poThemeStyle').setAttribute('href', lsUrl);

    this.settings.theme = tsTheme;
    this.settings.urlTheme = lsUrl;
    this.saveSettings();
  }

  loadSettings() {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }

    this.applyTheme(this.settings.theme);
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }
}

interface Settings {
  urlTheme: string;
  theme: string;
}