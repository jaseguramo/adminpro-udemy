import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  laMenu: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Graficas', url: '/graficas1' },
        { title: 'ProgressBar', url: '/progress' },
        { title: 'Promesas', url: '/promesas' },
        { title: 'RxJs', url: '/rxjs' },
      ]
    }
  ];

  constructor() { }
}
