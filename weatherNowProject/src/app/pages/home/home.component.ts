import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  weatherDatas: Array<any> = [];
  lastUpdated = Date.now();  

  constructor(private httpService: HttpService) {

    this.updatedTime()
    this.getAPI()

    //600000
    interval(60000).subscribe(x => {
      this.updatedTime();
      this.getAPI();
    })
    
  }

  createDB() {
    const citys = [
      {name: 'Nuuk', country: 'gl'},
      {name: 'Urubici', country: 'br'},
      {name: 'Nairobi', country: 'ke'}
    ]
    return citys;  
  }

  getAPI() {
    this.weatherDatas = [];
    this.createDB().forEach(element => {
      this.httpService.getWeatherData(element)
      .then(result => {
        this.weatherDatas.push(result)
      })
    });
  }

  updatedTime() {
    delete this.lastUpdated;
    this.lastUpdated = Date.now();
  }

}
