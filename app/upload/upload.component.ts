import { Component } from "@angular/core";
import { first } from "rxjs/operators";
import { AlertService } from "../alert/alert.service";

import { UploadService, AuthenticationService } from "../_services";

@Component({
  templateUrl: "upload.component.html",
  styleUrls: ["./upload.css"]
})
export class UploadComponent {
  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };
  fileToUpload: File = null;
  constructor(
    private fileUploadService: UploadService,
    protected alertService: AlertService
  ) {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.fileUploadService.postFile(this.fileToUpload).subscribe(
      data => {
        this.alertService.success("Success!!", this.options);
      },
      error => {
        console.log(error);
      }
    );
  }
}
