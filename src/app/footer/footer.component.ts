import { Component, Input, OnChanges, OnInit, DoCheck } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div>
            <ng-content></ng-content>
            <h2>{{searchTerms}}</h2>
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
            color:red;
            font-size:2em;
        }
    `]
})

export class FooterComponent implements OnChanges, OnInit {
    @Input()
    city: string;
    @Input()
    search: string;
    searchTerms;

    ngOnInit() {
        this.searchTerms = this.search;
    }

    ngOnChanges() {
        this.searchTerms  = this.search;
        console.log("footer changes", this.search);

    }
}