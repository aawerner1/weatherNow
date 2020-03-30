import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  db = [
    {name: 'Nuuk'},
    {name: 'Urubici'},
    {name: 'Nairob' }
  ]
}
