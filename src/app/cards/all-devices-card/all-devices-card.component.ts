import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-all-devices-card',
  templateUrl: './all-devices-card.component.html',
  styleUrls: ['./all-devices-card.component.css']
})
export class AllDevicesCardComponent implements OnInit {

  dataJson = {
    "total": 50,

    "deviceInfo": [
      {
        "deviceName": "Calvin",
        "deviceData": 43
      },
      {
        "deviceName": "Marvin",
        "deviceData": 95
      }, {
        "deviceName": "Jackson",
        "deviceData": 60
      }, {
        "deviceName": "Cullen",
        "deviceData": 68
      }
    ]
  };

  constructor() { }

  ngOnInit() {


  }

}
