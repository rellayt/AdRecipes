import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: string = 'button';

  @Input() isFullWidth;

  @Input() isProcessing: boolean = false;

  @Input() isDisabled: boolean = false;

  @Input() secondary: boolean = false;

  @Output() onClick = new EventEmitter<boolean>();

  clicked() {
    this.onClick.emit(true);
  }
}
