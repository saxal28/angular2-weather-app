import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    template: `
        <div>
            {{currentWeather}}
        </div>
    `,
    styles: [`
        div {
            background:#333;
            padding:50px;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
        }
    `]
})

export class FooterComponent {
    currentWeather: string;
}