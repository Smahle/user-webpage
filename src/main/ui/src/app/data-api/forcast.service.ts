import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForcastService {

  constructor(private http: HttpClient) { }

  LoadCurrentWeather(): Observable<any> {
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?lat=62.90&lon=6.91&appid=0b9161dba2376f1290bdd8f47193ca53&units=metric");
  }
}
