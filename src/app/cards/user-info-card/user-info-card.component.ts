import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.css']
})
export class UserInfoCardComponent implements OnInit {

  userName = 'Kushal';

  constructor() {
  }

  ngOnInit() {
    console.log('hello');
  }

  abc() {
    console.log('hello');
  }
}
