import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { config } from "../../config";

@Injectable({ providedIn: "root" })
export class UploadService {
  constructor(private http: HttpClient) {}

  postFile(fileToUpload: File): any {
    
    const endpoint = `${config.apiUrl}/api/private/file`;
    const formData: FormData = new FormData();
    formData.append("file", fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData);
  }
}
