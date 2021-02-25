import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShipService } from '../_services/ship.service';
import { Ship } from '../ship';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  public ships:Ship[];
  
  constructor(private shipService: ShipService) {   }

  ngOnInit() {
  this.getShips();  
  }
  getShips(): void {
    this.shipService.getShips()
    .subscribe(ships => ships = ships);
    console.log(this.ships); 
  }
}
