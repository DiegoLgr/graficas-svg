import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

    height = 500;
    data = [260, 300, 10, 489, 63];

    constructor() { }

    ngOnInit(): void {
    }

}
