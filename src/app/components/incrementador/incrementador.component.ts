import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { textBinding } from '@angular/core/src/render3';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('title') psTitle = 'Title';
  @Input('progress') piProgress: number = 50;

  @Output() _changeValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChangeEvent(tiValue: number) {
    if (tiValue <= 0) {
      this.piProgress = 0;
    } else if (tiValue >= 100) {
      this.piProgress = 100;
    } else {
      this.piProgress = tiValue;
    }

    this.txtProgress.nativeElement.value = this.piProgress;
    this._changeValue.emit(this.piProgress);
  }

  changeValue(tiValue: number) {
    const liProgress: number = this.piProgress + tiValue;

    if (liProgress > 100 || liProgress < 0) {
      return;
    }

    this.piProgress = liProgress;
    this._changeValue.emit(this.piProgress);
    this.txtProgress.nativeElement.focus();
  }
}
