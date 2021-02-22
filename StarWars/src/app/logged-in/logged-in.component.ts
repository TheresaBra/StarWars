import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {
  ships:any[];  
  
  constructor(private http:HttpClient) {
    this.ships;
   }

  ngOnInit() {
    this.http.get<any[]>('https://swapi.dev/api/starships').subscribe(ships =>{
      this.ships = ships; 
      console.log(this.ships)
    }); 
  }

}