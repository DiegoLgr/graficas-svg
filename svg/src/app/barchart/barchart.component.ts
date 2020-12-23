import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

    height = 500;
    width = 300;

    viewBox;

    data = [260, 300, 10, 489, 63];
    bars;

    constructor() {
        this.viewBox = ` 0 0 ${this.width} ${this.height}`;

        const bw =  20;
        const bm =  5;
        this.bars = this.data.map((bar, i) => {
            return {
                x: i * (bw + bm),
                y: this.height - bar,
                width: bw,
                height: bar,
                clases: "programming",
            }
        });

    }

    ngOnInit(): void {
    }

}
