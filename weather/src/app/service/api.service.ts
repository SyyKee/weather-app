import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';

//const apiKey = "bd93fbb6a8f44f40a2392732231704"
const apiKey = "2b07174b1c474d77aa481611230205"

const url = "http://api.weatherapi.com/v1/forecast.json?key="



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

    get(region: any): Observable<any>{
        return this.http.get<any>(`${url}${apiKey}&q=${region}&days=6&aqi=no&alerts=no`)
    }
  
}
