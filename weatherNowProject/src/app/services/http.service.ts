import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class HttpService {

  constructor(private http: HttpClient){ }

  apiKey = '7334a256d69d76daef558fdbcf53527d'

  getWeatherData(db) {
    return this.http
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${db.name},${db.country}&appid=`+ this.apiKey)
      .toPromise()
  }
 
}
