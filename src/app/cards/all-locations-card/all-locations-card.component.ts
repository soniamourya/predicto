import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-all-locations-card',
  templateUrl: './all-locations-card.component.html',
  styleUrls: ['./all-locations-card.component.css']
})
export class AllLocationsCardComponent implements OnInit {

  data:any={};

  constructor(private http:HttpClient){
    console.log("contructor");
    this.getTopics();
    this.getTopics1();
  }

  ngOnInit() {
  }


  getTopics() {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    console.log("umang req :",this.http.get('http://localhost:8080/topicCon/topics').map((res:Response)=> res.json()));
    return this.http.get('http://localhost:8080/topicCon/topics').map((res:Response)=> res.json());
  }
  getTopics1() {
    this.getTopics().subscribe(data => {console.log('umang data :',data)
        this.data = data
      },
    );
  }

}
