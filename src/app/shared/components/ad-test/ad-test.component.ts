import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ad-test',
  templateUrl: './ad-test.component.html',
  styleUrls: ['./ad-test.component.scss'],
})
export class AdTestComponent {
  @Input() display = 'block';

  @Input() fullWidthResponsive = false;

  @Input() height = 'auto';

  @Input() width = 'auto';
}
