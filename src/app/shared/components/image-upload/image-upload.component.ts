import { Component, OnInit } from '@angular/core';
import { isUndefined } from '../../../core/utility/is-undefined';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
  fileName = '';

  file: File;

  imageSrc;

  constructor() {}

  ngOnInit(): void {}

  onImageSelected(event) {
    const file = event.target.files[0];

    if (isUndefined(file)) {
      return;
    }
    this.file = file;
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => (this.imageSrc = reader.result);
    this.fileName = this.file.name;
  }
}
