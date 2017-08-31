import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';

import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  @Input('imgId') public imgId;
  @Input('autoupload') autoupload;

  private uploader: CloudinaryUploader;
  private uploading = false;
  private isChanged = false;


  @Output() uploaded: EventEmitter<string> = new EventEmitter();
  @Output() changed: EventEmitter<string> = new EventEmitter();

  constructor(private mainService: MainService) {
    ///////////////                 Main Image Uploader         ////////////////
    this.uploader = new CloudinaryUploader(
      new CloudinaryOptions({
        cloudName: this.mainService.cloudName,
        uploadPreset: this.mainService.cloudinaryUploadPresets.setups
      })
    );

    this.uploader.onSuccessItem = ( item, response, status, headers) => {
      const img = JSON.parse(response);

      const index = this.uploader.queue.indexOf(item);

      this.uploading = false;
      this.uploaded.emit(img.public_id);

      return {item, response, status, headers};
    };

    this.uploader.onErrorItem = ( item, response, status, headers) => {
      this.uploading = false;
      console.log(item, response);
    };
  }

  ngOnInit() {

  }

  imgChanged() {
    this.isChanged = true;
    this.changed.emit('changed');
    this.uploading = true;

    if (this.autoupload) {
      this.uploadAll();
    }
  }

  private uploadAll() {
    this.uploader.uploadAll();
  }
}
