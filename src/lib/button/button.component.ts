import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  standalone: true,
  imports: [NgClass],
  styleUrl: './button.component.scss',
  template: `
    <button type="button" class= "button" [ngClass]="primary ? '' : 'green'" (click)="onClickButton($event)" >{{label}}</button>
  `,
})
export class ButtonComponent {

  @Input() primary: boolean = true;
  @Input() label: string = '';

  @Output() onClick = new EventEmitter<any>();

  onClickButton(event: MouseEvent) {
    this.onClick.emit(event);
  }
}
