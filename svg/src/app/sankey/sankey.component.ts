import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sankey',
  templateUrl: './sankey.component.html',
  styleUrls: ['./sankey.component.css']
})
export class SankeyComponent implements OnInit {

    o = { x: 350, y: 350 };
    p = { x: 650, y: 650 };

    b1;
    b2;
    c = 2;
    vein;
    vein2;


    constructor() {
        this.calcVein();
        this.calcVein2();
    }

    ngOnInit(): void {
    }


    distanciaY(v){
        this.o.y = 500 - v/2;
        this.p.y = 500 + v/2;
        this.calcVein();
        this.calcVein2();
    }

    distanciaX(v){
        this.o.x = 500 - v/2;
        this.p.x = 500 + v/2;
        this.calcVein();
        this.calcVein2();
    }

    calcRat(){
        const Ay = Math.abs(this.p.y - this.o.y);
        const Ax = Math.abs(this.p.x - this.o.x);
        this.c = 1 + 1.4*Ay/Ax;
    }

    calcVein(){
        this.calcRat();
        console.log(this.c);

        this.b1 = { x: this.p.x - Math.abs(this.p.x - this.o.x)/this.c, y: this.o.y }
        this.b2 = { x: this.o.x + Math.abs(this.p.x - this.o.x)/this.c, y: this.p.y }
        this.vein =
        `M ${this.o.x} ${this.o.y}
         C ${this.b1.x+50} ${this.b1.y} ${this.b2.x+50} ${this.b2.y} ${this.p.x} ${this.p.y}`;
    }
    calcVein2(){
        this.calcRat();
        console.log(this.c);

        this.b1 = { x: this.p.x - Math.abs(this.p.x - this.o.x)/this.c, y: this.o.y }
        this.b2 = { x: this.o.x + Math.abs(this.p.x - this.o.x)/this.c, y: this.p.y }
        this.vein2 =
        `M ${this.o.x} ${this.o.y+100}
         C ${this.b1.x-50} ${this.b1.y+100} ${this.b2.x-50} ${this.b2.y+100} ${this.p.x} ${this.p.y+100}`;
    }

}

