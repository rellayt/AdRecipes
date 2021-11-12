import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

export interface SelectOptions {
  displayName: string;
  value: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() control: FormControl | AbstractControl = new FormControl('');

  @Input() options: SelectOptions[] = [];

  @Input() isDisabled: boolean = false;
}
