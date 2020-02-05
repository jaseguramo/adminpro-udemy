import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  title: string;

  constructor(private _meta: Meta,
              private _router: Router,
              private _title: Title) {
    this.getDataRoutes().subscribe( data =>  {
      this.title = data.title;
      this._title.setTitle(this.title);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.title
      };

      this._meta.updateTag(metaTag);
    });
  }

  ngOnInit() {
  }

  getDataRoutes() {
    return this._router.events.pipe(
      filter(_event => _event instanceof ActivationEnd),
      filter((_event: ActivationEnd) => _event.snapshot.firstChild === null),
      map( (_event: ActivationEnd) => _event.snapshot.data)
    );
  }
}
