import { Component, OnInit, AfterContentChecked	, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'weather-box',
  template: `
    <div>
      <h1>this is the weather box!</h1>
      <h2>The Current Temperature for {{city}} is: {{currentTemperature}}</h2>
      <h1>{{search}}</h1>
      <input type="text" [(ngModel)]="search" (keyup)="handleInputChange()" />
    </div>
  `,
  styles: [`
    div {
      margin: 0px auto;
      max-width:700px;
      padding:50px;
      border:3px solid #333;
    }
    input {
      font-size:2em;
      margin: 10px auto;
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
  @Input() search: string;

  @Output() 
  exportWeather = new EventEmitter();
  @Output() 
  updateSearchText = new EventEmitter();

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

  handleInputChange() {
    this.updateSearchText.emit(this.search);
    console.log("ngchanges:", this.search);
  }

  ngAfterContentChecked() {
    console.log(`changed: ${this.city}`)
    this.exportWeather.emit(this.city);
  }

}
