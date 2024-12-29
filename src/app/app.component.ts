import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  param_a: number = 0;
  param_b: number = 0;
  param_c: number = 0;
  root1: number = 0;
  root2: number = 0;
  mssge: string = "";
  discriminant: number = 0;

  show = false;
  calculated = false;

  onCalculate() {
    this.root1 = NaN;
    this.root2 = NaN;
    if (this.param_a == 0) {
      this.mssge = "If a=0, this is not a quadratic and the quadratic formula cannot be used (division by 0).";
      this.calculated = false;
    } else {
      this.discriminant = this.param_b*this.param_b-4*this.param_a*this.param_c;
      if (this.discriminant < 0) {
        this.mssge = "Equation has no real roots!"
        this.calculated = false;
      } else {
        this.root1 = (-this.param_b+Math.sqrt(this.discriminant))/(2*this.param_a);
        this.root2 = (-this.param_b-Math.sqrt(this.discriminant))/(2*this.param_a);

        this.mssge = "Calculation completed successfully!"
        this.calculated = true;
      }
    }

    /* Display the alert for 5 seconds */
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 5000);
  }
}
