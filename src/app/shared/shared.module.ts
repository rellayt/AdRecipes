import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { RecipeTileComponent } from './components/recipe-tile/recipe-tile.component';
import { HeaderComponent } from './components/header/header.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { CardComponent } from './components/card/card.component';
import { SelectComponent } from './components/select/select.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    ButtonComponent,
    InputComponent,
    RecipeTileComponent,
    HeaderComponent,
    TextAreaComponent,
    CardComponent,
    SelectComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ButtonComponent,
    InputComponent,
  ],
})
export class SharedModule {}
