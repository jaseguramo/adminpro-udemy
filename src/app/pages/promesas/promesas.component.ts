import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.countThree().then( msg => console.log('Termino: ', msg))
                     .catch(err => console.error('Error en la promesa: ', err));
  }

  ngOnInit() {
  }

  countThree(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let liCounter = 0;
      const loInterval = setInterval( () => {
        liCounter++;
        console.log(liCounter);

        if (liCounter === 3) {
          clearInterval(loInterval);
          resolve(true);
          // reject('this is an error');
        }
      }, 1000);
    });
  }
}
