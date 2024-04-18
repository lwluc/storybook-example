import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from "../../lib/button/button.component";
import { NumberInputComponent } from '../../lib/input/number/number-input.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [NumberInputComponent, ButtonComponent],
  template: `
      <div class="calculator-container">
        <custom-number-input label="First Number" [(value)]="firstNumber"></custom-number-input>
        <custom-number-input label="Second Number" [(value)]="secondNumber"></custom-number-input>
        <custom-button (onClick)="calculate($event)" label="Berechnen"></custom-button>
        <p data-testid="calculation-result" class="result">Calculation result {{calculationResult}}</p>
      </div>
    `,
    styles: `
      .calculator-container {
        .result {
          width: 300px;
          border-radius: 5px;
          padding: 15px;
          background-color: #e9e9e9;
          box-shadow: 10px 10px #b8b7b7;
        }
      }
    `
})
export class calculatorComponent {

  firstNumber: number = 1;
  secondNumber: number = 1;

  calculationResult: number = 1;

  calculate(event: MouseEvent) {
    this.calculationResult = this.firstNumber * this.secondNumber;
    console.log('calculating ', this.firstNumber, ' * ', this.secondNumber, " = ", this.calculationResult);
  }
}
