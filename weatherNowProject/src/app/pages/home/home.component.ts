import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  weatherDatas: Array<any> = [];
  lastUpdated = Date.now();  

  constructor(private httpService: HttpService) {
    this.updateDatas()  
  }

  //600000

  ngOnInit(){
    setInterval(()=>{this.updateDatas()}, 60000);
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

  updateDatas() {
    this.updatedTime()
    this.getAPI()
  }

}
