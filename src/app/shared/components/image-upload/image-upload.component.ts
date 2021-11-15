import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { isUndefined } from '../../../core/utility/is-undefined';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent {
  fileName = '';

  file: File;

  imageSrc;

  @Output() fileEmitter = new EventEmitter<File>();

  onImageSelected(event) {
    const file = event.target.files[0];

    if (isUndefined(file)) {
      return;
    }
    this.fileEmitter.emit(file);
    this.file = file;
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => (this.imageSrc = reader.result);
    this.fileName = this.file.name;
  }
}
