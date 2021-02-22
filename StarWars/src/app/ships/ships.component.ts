import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  ships:object;  
  
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
