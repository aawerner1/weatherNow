import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() citys: Array<string> = [];
  currentTime = Date.now();
  datas: Array<any> = [];
  cardErro: boolean = false;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.updateDatas()

    //600000
    setInterval(()=>{this.updateDatas()}, 60000);
  }

  getAPI() {
    this.datas = [];
    this.citys.forEach(element => {
      this.httpService.getWeatherData(element).subscribe(
        (res)=> { this.datas.push(res) },
        (error) => this.cardErro = true,
      )
    });
  }

  updatedTimes() {
    delete this.currentTime;
    this.currentTime = Date.now();
  }

  updateDatas() {
    this.getAPI()
    this.updatedTimes()
  }

  tryAgain() {
    delete this.cardErro;
    let city = {name: 'Nairobi'}
    this.httpService.getWeatherData(city).subscribe(
      (res)=> {this.datas.push(res) },
    )
  }

}
