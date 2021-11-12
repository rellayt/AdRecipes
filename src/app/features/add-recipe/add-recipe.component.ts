import { Component, OnInit } from '@angular/core';
import { SelectOptions } from '../../shared/components/select/select.component';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  timeOptions: SelectOptions[] = [
    { value: '15 mins', displayName: '15 minutes' },
    { value: '30 mins', displayName: '30 minutes' },
    { value: '1 hour', displayName: '1 hour' },
    { value: '2 hours', displayName: '2 hours' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
