import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-image',
  templateUrl: './recipe-image.component.html',
  styleUrls: ['./recipe-image.component.scss'],
})
export class RecipeImageComponent {
  @Input() name: string;

  @Input() photoUrl: string;

  @Input() time: string;

  @Input() authorName: string;
}
