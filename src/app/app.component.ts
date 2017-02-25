import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';


@Component({
  selector: 'app-root',
  template: `
  <div>
    <div class="nav">Current Weather for {{city}} </div>
    <weather-box
      (exportWeather)="updateWeather($event)"    
    ></weather-box>
    <app-footer></app-footer>
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
  updateWeather(event) {
      this.city = event;
  }
}
