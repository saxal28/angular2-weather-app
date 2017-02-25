import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';


@Component({
  selector: 'app-root',
  template: `
  <div>
    <div class="nav">Current Weather for {{city}} </div>
    <weather-box
      (exportWeather)="updateWeather($event)"
      (updateSearchText)="getSearchText($event)" 
      [search]="search"
         
    ></weather-box>
    <app-footer [search]="search">
      <h2>{{city}} {{search}}</h2>
    </app-footer>
  </div>
  `,
  styles:[`
            .nav {
            background:#333;
            padding:50px;
            margin-bottom: 30px;
            color:lime;
            font-size:2em;
            font-weight:bold;
        }
  `],
  providers: [WeatherService]
})
export class AppComponent {
  city: string = 'null';
  wowzer = "wozer";
  search = '...';
  apples = '2';
  updateWeather(event) {
      this.city = event;
  }
  getSearchText(event) {
    console.log('event triggered')
    this.search = event;
    console.log('event! ', event)
  }
}
