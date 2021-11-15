import { Component, OnInit } from '@angular/core';
import { SelectOptions } from '../../shared/components/select/select.component';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RootState } from '../../core/store/root.state';
import { Store } from '@ngrx/store';
import { CreateRecipe } from '../../core/store/recipes/recipes.actions';
import { selectRecipesProcessing } from '../../core/store/recipes/recipes.selectors';

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

  addRecipeForm: FormGroup;

  createRecipeProcessing$ = this.store.select(selectRecipesProcessing);

  image: File;

  constructor(private fb: FormBuilder, private store: Store<RootState>) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  get preparingSteps(): FormArray {
    return this.addRecipeForm.controls['preparingSteps'] as FormArray;
  }

  private initializeForm(): void {
    this.addRecipeForm = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(25)]],
      time: [null, [Validators.required]],
      description: [null, [Validators.required, Validators.maxLength(200)]],
      preparingSteps: this.fb.array([this.createPreparingStepControl()]),
    });
  }

  onImageChanged(file: File): void {
    this.image = file;
  }

  createPreparingStepControl(): FormControl {
    return this.fb.control(null, [
      Validators.required,
      Validators.maxLength(90),
    ]);
  }

  getControlList(abstractControl: AbstractControl): AbstractControl[] {
    return abstractControl instanceof FormArray ? abstractControl.controls : [];
  }

  addPreparingStep(): void {
    this.preparingSteps.push(this.createPreparingStepControl());
  }

  removeLastPreparingStep(): void {
    this.preparingSteps.removeAt(this.preparingSteps.length - 1);
  }

  submit(): void {
    const payload = {
      payload: { ...this.addRecipeForm.value, image: this.image },
    };
    this.store.dispatch(CreateRecipe(payload));
  }
}
