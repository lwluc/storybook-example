import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-number-input',
  standalone: true,
  template: `
    <div class="input-container">
      <label>{{ label }}</label>
      <input type="number" [value]="value" (input)="onChange($event)">
    </div>
  `,
  styles: `
    .input-container {
      display: flex;
      flex-direction: column;

      input[type=number] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      }

    }
  `,
})
export class NumberInputComponent {

  @Input() label: string = '';
  @Input() value: number | undefined;
  @Output() valueChange = new EventEmitter<number>();

  onChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).valueAsNumber
    this.value = newValue;
    this.valueChange.emit(newValue);
  }
}
