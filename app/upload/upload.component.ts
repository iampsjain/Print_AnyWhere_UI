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
    if (this.fileToUpload != null) {
      this.fileUploadService.postFile(this.fileToUpload).subscribe(
        data => {
          this.alertService.success("Success!!", this.options);
        },
        error => {
          this.alertService.error("Error !! [" + error + "]", this.options);
        }
      );
    } else {
      this.alertService.warn("Please select file first", this.options);
    }
  }
}
