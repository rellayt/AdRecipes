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
import { ValidationFeedbackComponent } from './components/validation-feedback/validation-feedback.component';
import { SnackBarService } from './services/snackbar.service';
import { RouterModule } from '@angular/router';
import { BaseFeatureWrapperComponent } from './components/base-feature-wrapper/base-feature-wrapper.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { AdblockNotificationDialogComponent } from './components/adblock-notification-dialog/adblock-notification-dialog.component';
import { AdTestComponent } from './components/ad-test/ad-test.component';
import { MobileLinksDialogComponent } from './components/mobile-links-dialog/mobile-links-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    ButtonComponent,
    InputComponent,
    RecipeTileComponent,
    HeaderComponent,
    TextAreaComponent,
    CardComponent,
    SelectComponent,
    ValidationFeedbackComponent,
    BaseFeatureWrapperComponent,
    ImageUploadComponent,
    AdblockNotificationDialogComponent,
    AdTestComponent,
    MobileLinksDialogComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ButtonComponent,
    InputComponent,
    HeaderComponent,
    TextAreaComponent,
    CardComponent,
    SelectComponent,
    ValidationFeedbackComponent,
    RecipeTileComponent,
    CommonModule,
    RouterModule,
    BaseFeatureWrapperComponent,
    ImageUploadComponent,
    AdTestComponent,
  ],
  providers: [SnackBarService],
})
export class SharedModule {}
