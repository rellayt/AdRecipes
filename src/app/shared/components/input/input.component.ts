import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() control: FormControl | AbstractControl = new FormControl('');

  @Input() set type(value) {
    this._type = value;
    this.hide = value === 'password';
  }

  @Output() onEnter = new EventEmitter<void>();

  _type: string = 'text';

  hide = false;

  constructor() {}

  onKeyup() {
    this.onEnter.emit();
  }
}
