import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-demography',
  templateUrl: './demography.component.html',
  styleUrl: './demography.component.css',
})
export class DemographyComponent {
  title = 'ng2-charts-demo';
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: true,
        tension: 0,
        borderWidth: 2,
        pointBorderColor: '#00534E',
        pointBackgroundColor: 'rgba(0, 83, 78, 0.25)',
        borderColor: '#00534E',
        backgroundColor: 'rgba(0, 83, 78, 0.25)',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend = true;

  constructor() {}

  ngOnInit() {}
}
