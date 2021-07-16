import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { AppContainer } from 'app/gx/base/app-container';


@Component({
  selector: 'gx-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})

export class FileUploadComponent implements OnChanges {

  @Input() fileSource = '';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() uploadService = null;

  @Output() onFileChanged: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('fileInput', { static: false }) file;

  src1 = '';
  show = false;
  modalTitle: string;
  uploading = false;

  constructor(
    protected app: AppContainer,
    protected titleService: Title) {
  }

  ngOnChanges() {
    this.modalTitle = this.titleService.getTitle();
  }

  triggerAction() {
    if (this.fileSource === "") {
      this.file.nativeElement.click();
    } else {
      this.show = !this.show;
    }
  }

  viewFile() {
    if (this.fileSource !== '' && this.fileSource.indexOf('gxupload:') === -1 && !this.show) {
      window.open(this.fileSource, '_blank');
    }
  }

  updateFileAction() {
    this.show = !this.show;
  }

  clearFileAction() {
    this.fileSource = null;
    this.uploading = false;
    this.onFileChanged.emit('');
  }

  async fileSelectedAction() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.uploading = true;
        const objectId = await this.onFileSelected(files[key]);
        if (objectId) {
          await this.updateFile(files[key], objectId);
        }
        this.uploading = false;
        this.show = false;
        return;
      }
    }
  }

  async onFileSelected(file: File): Promise<string> {
    let result = await this.uploadService(file);
    return result.object_id;
  }

  closeAction() {
    this.show = false;
  }

  translate(key: string) {
    return this.app.translate(key);
  }

  updateFile(file, objectId): Promise<void> {
    return new Promise(complete => {
      if (FileReader && file) {
        const fr = new FileReader();
        fr.onload = () => {
          this.file = fr.result.toString();
          this.onFileChanged.emit(objectId);
          complete();
        }
        fr.readAsDataURL(file);
      }
    });
  }

  updateFileUrl(uploadResult) {
    if (uploadResult.object_id) {
      this.onFileChanged.emit(uploadResult.object_id);
    }
  }

  clearImageAction() {
    this.fileSource = null;
  }

}