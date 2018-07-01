import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-all-devices-card',
  templateUrl: './all-devices-card.component.html',
  styleUrls: ['./all-devices-card.component.css']
})
export class AllDevicesCardComponent implements OnInit {

  dataJson1 = 'asdf';
  dataJson = {
    'total': 50,
    'type a' : 40,
    'type b' : 20,
    'type c' : 10,
    'type d' : 5,
  };

  constructor() { }

  ngOnInit() {


  }

}
