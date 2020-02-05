import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnDestroy, OnInit {

  loSubscription: Subscription;

  constructor() {

    this.loSubscription = this.getObservable()
                            .subscribe(
                              liNumber => console.log('Subs: ', liNumber),
                              loErr => console.error('Error en el observable', loErr),
                              () => console.log('El observable terminó.')
                            );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.loSubscription.unsubscribe();
    console.log('Destruyendo el componente.');
  }

  getObservable(): Observable<any> {
    return new Observable ((observer: Subscriber<any>) => {
      let liCounter = 0;

      const loInterval = setInterval( () => {
        liCounter++;
        const loOutput = {
          value: liCounter
        };

        observer.next(loOutput);

        // if (liCounter === 3) {
        //   clearInterval(loInterval);
        //   observer.complete();
        // }

        // if (liCounter === 2) {
        //   // clearInterval(loInterval);
        //   observer.error('Auxilio!');
        // }
      }, 1000);
    }).pipe(
      map(resp => resp.value),
      filter((value, index) => {
        if (value % 2 === 1) {
          return true;
        } else {
          return false;
        }
      })
    )
  }
}
