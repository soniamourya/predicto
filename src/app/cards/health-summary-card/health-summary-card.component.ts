import {Component, OnInit} from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-health-summary-card',
  templateUrl: './health-summary-card.component.html',
  styleUrls: ['./health-summary-card.component.css']
})
export class HealthSummaryCardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawDeviceHealthChart);

    function drawDeviceHealthChart() {

      let data = google.visualization.arrayToDataTable([
        ['Health', 'Units'],
        ['Healthy', 50],
        ['Critical', 12],
        ['Unhealthy', 20],
      ]);

      let options = {
        is3D: true,
        width: 350,
        height: 300,
        legend: 'none'
      };

      let chart = new google.visualization.PieChart(document.getElementById('piechart'));

      chart.draw(data, options);
    }
  }

}
