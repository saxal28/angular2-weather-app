import { Component, OnInit, AfterContentChecked	, Input, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'weather-box',
  template: `
    <div>
      <h1>this is the weather box!</h1>
      <h2>The Current Temperature for {{city}} is: {{currentTemperature}}</h2>
    </div>
  `,
  styles: [`
    div {
      margin: 0px auto;
      max-width:700px;
      padding:50px;
      border:3px solid #333;
    }
  `]
  ,
})
export class WeatherBoxComponent implements OnInit, AfterContentChecked	{
  weatherData;

  @Input()
  city: string = "null";
  currentTemperature: string = "null";
  errorMessage: string;

  @Output() exportWeather = new EventEmitter();

  constructor(private _weatherService: WeatherService) { 
    this._weatherService.getWeather()
      .subscribe(
        data => {
          this.city = `${data.location.name}, ${data.location.region}`;
          this.currentTemperature = data.current.temp_f;
        },
        error => this.errorMessage = error
      )
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    console.log(`changed: ${this.city}`)
    this.exportWeather.emit(this.city);
  }

}
