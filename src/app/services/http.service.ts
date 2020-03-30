import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../classes/weather-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient){ }

  apiKey = '7334a256d69d76daef558fdbcf53527d'

  getWeatherData(db) {
    console.log('db', db);

    return this.http
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${db.name}&units=metric&appid=`+ this.apiKey)
      .pipe(
        map(data => {
          return new WeatherData(
            Math.trunc(data['main']['temp']),
            data['name'],
            data['sys']['country'],
            data['main']['humidity'],
            data['main']['pressure']
          )
        })
      )
  }

}
