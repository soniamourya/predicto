import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-all-locations-card',
  templateUrl: './all-locations-card.component.html',
  styleUrls: ['./all-locations-card.component.css']
})
export class AllLocationsCardComponent implements OnInit {

  //data:any={};

  //to resolve the error comming while applying for each
  //NgFor only supports binding to Iterables such as Arrays.
    data:Observable<Array<any>>;

  constructor(private http:HttpClient){
    console.log("contructor");
    this.getData();
    this.getData1();
  }

  ngOnInit() {
  }


  getData() {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    console.log("umang req :",this.http.get('http://localhost:8080/topicCon/topics').map((res:Response)=> res.json()));
    return this.http.get('http://localhost:8080/topicCon/topics').map((res=>res));
  }
  getData1() {
    this.getData().subscribe(data => {console.log('umang data :',data)
        this.data = data
      },
    );
  }

}
