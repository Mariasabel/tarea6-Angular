import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  n1: number = 0;
  n2: number = 0;
  result: number = 0;

  sumar() {
    this.result = this.n1 + this.n2;
  }

  restar() {
    this.result = this.n1 - this.n2;
  }

  multiplicar() {
    this.result = this.n1 * this.n2;
  }


  ngOnInit(): void {
  }

}
