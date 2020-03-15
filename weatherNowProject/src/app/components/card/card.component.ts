import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit{

  @Input() datas;
  @Input() updatedTime;
  
  constructor() {
  }

  ngOnInit(): void {
    this.convertToCelcius();

  }

  convertToCelcius() {
   this.datas.array.forEach(element => {
     Math.round(element.main.temp -= 273.15);
   })
  }

}
