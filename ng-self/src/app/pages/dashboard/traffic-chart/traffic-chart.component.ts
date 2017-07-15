import { Component, OnInit } from '@angular/core';
import { TrafficChartService } from "./traffic-chart.service";
import * as Chart from 'chart.js';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-traffic-chart',
  templateUrl: './traffic-chart.component.html', 
  styleUrls: ['./traffic-chart.component.css']
})
export class TrafficChartComponent{

  public doughnutData: Array<Object>;

  constructor(private trafficChartService:TrafficChartService) {
    this.doughnutData = trafficChartService.getData();
  }

  ngAfterViewInit() {
    this._loadDoughnutCharts();
  }

  private _loadDoughnutCharts() {
    let el = jQuery('.chart-area').get(0) as HTMLCanvasElement;

    var ctx = el.getContext('2d');

    new Chart(ctx, {
      type: 'doughnut',
      data: this.doughnutData,
      options: {
        segmentShowStroke: false,
        percentageInnerCutout : 64,
        responsive: true
      },
      });
  }
}