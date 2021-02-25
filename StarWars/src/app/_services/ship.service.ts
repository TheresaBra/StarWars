import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ship } from '../ship';

import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ShipService {
    private shipsUrl = 'https://swapi.dev/api/starships';  

    constructor(
      private http: HttpClient,
    ) { }
    
    getShips(): Observable<Ship[]> {
      return this.http.get<Ship[]>(this.shipsUrl);
      
    }

    // getShip(name: string): Observable<Ship> {
    //   const url = `${this.shipsUrl}/${name}`;
    //   return this.http.get<Ship>(url);
    // }

}
