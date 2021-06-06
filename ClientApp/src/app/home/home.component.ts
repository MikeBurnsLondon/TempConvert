import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  valCentigrade: number;
  valFahrenheit: number;
  valKelvin: number;
  absZero: boolean;

  constructor() {
    this.valCentigrade = 0;
    this.absZero = false;
    this.CalcConversions("centigrade");
  }

  ValueChanged(id:string):void {

    this.CalcConversions(id);
    if (this.valKelvin <= 0) {
      this.absZero = true;
      this.valKelvin = 0;
      this.CalcConversions("kelvin");
    }
    else this.absZero = false;

  }

  CalcConversions(id:string): void {
    switch (id) {
      case 'centigrade': {
        this.valFahrenheit = (this.valCentigrade * (9 / 5)) + 32;
        this.valKelvin = this.valCentigrade + 273.15;
        break;
      }
      case 'fahrenheit': {
        this.valCentigrade = (this.valFahrenheit - 32) * (5 / 9);
        this.valKelvin = this.valCentigrade + 273.15;
        break;
      }
      case 'kelvin': {
        this.valCentigrade = this.valKelvin - 273.15;
        this.valFahrenheit = (this.valCentigrade * (9 / 5)) + 32
        break;
      }
    }
  }

}
