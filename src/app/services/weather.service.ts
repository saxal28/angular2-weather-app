import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

@Injectable()

export class WeatherService {
    private _apiKey: string = '12fa6ea21af84ee995f42412172502';
    private _weatherUrl= `http://api.apixu.com/v1/current.json?key=${this._apiKey}&q=Belleville,IL`;

    constructor(private _http: Http) {}

    getWeather() {

            return this._http.get(this._weatherUrl)
                .map(response => response.json())
                .do(data => console.log('all: ' + JSON.stringify(data)))
                .catch(this.handleError);

    }
    
    private handleError(error) {
        console.log(error);
        return Observable.throw(error.json().error || 'server error');
    }
}
