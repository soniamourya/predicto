import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/authService/auth.service";

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.css']
})
export class UserInfoCardComponent implements OnInit {


  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log('hello');
  }
}
