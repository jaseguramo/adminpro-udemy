import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input('title') psTitle = '';
  @Input() doughnutChartLabels: Label[];
  @Input() doughnutChartData: MultiDataSet[];
  @Input() doughnutChartType: any = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
