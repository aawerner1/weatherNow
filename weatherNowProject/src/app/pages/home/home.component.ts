import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  weatherData: Array<any> = [];

  createDB() {
    const citys = [
      {name: 'Nuuk', country: 'gl'},
      {name: 'Urubici', country: 'br'},
      {name: 'Nairobi', country: 'ke'}
    ]

    return citys;
    
  }

  constructor(private httpService: HttpService) {

    this.createDB().forEach(element => {
      this.httpService
        .getWeatherData(element)
        .then(result => { this.weatherData.push(result);
        })
    });
    
  }

  ngOnInit() {  }

}
