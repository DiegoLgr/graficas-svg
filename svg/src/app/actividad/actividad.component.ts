import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

    height = 500;
    width = 500;
    axisw = 3;
    margl = 140;
    margb = 75;
    chart;
    verticalAxis;
    horizontalAxis;
    Ticks;

    viewBox;

    data = [160, 200, 10, 289, 63];
    bars;

    constructor() {
        this.viewBox = ` 0 0 ${this.width} ${this.height}`;

        this.chart = {
            tlx: this.margl,
            tly: 75,
            trx: this.width - this.margl,
            try: 75,
            blx: this.margl,
            bly: this.height - this.margb,
            brx: this.width - this.margl,
            bry: this.height - this.margb,
        }
        this.verticalAxis = {
            x1: this.chart.tlx - this.axisw/2,
            x2: this.chart.blx - this.axisw/2,
            y1: this.chart.tly + this.axisw,
            y2: this.chart.bly + this.axisw,
        }
        this.horizontalAxis = {
            x1: this.chart.blx - this.axisw,
            x2: this.chart.brx - this.axisw,
            y1: this.chart.bly + this.axisw/2,
            y2: this.chart.bry + this.axisw/2,
        }

        const offset = 45;
        const bw =  20;
        const bm =  5;
        this.bars = this.data.map((bar, i) => {
            return {
                id: i,
                x: this.chart.blx + offset + i * (bw + bm),
                y: this.chart.bly - bar,
                width: bw,
                height: bar,
                clases: "programming",
            }
        });

    }

    ngOnInit(): void {
    }

    log(bar){
        console.log("una barra", bar);
    }
}

