import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable({
 providedIn: 'root'
})
export class UploadService {
 
 constructor(
   private httpClient: HttpClient,
 ) { }
 
 public uploadfile(file: File,
  selectedApplication: string,
  selectedEnvironment: string,
  selectedServers: string


 ) {
   let formParams = new FormData();
   formParams.append('file', file)
   formParams.append('selectedApplication', selectedApplication)
   formParams.append('selectedEnvironment', selectedEnvironment)
   formParams.append('selectedServers', selectedServers)
   return this.httpClient.post('http://localhost:8083/test/uploadFile', formParams)
 }
}