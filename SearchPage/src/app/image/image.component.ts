import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private uploadService: FileUploadService){}

  currentFileUpload: File;
  selectedFiles: FileList;
  assImage:string;
  previewPhoto =false;
  
  ngOnInit(){

  }
  selectFile(event) 
{
  this.selectedFiles = event.target.files;
}  
togglePhotoPreview(){
  this.previewPhoto = !this.previewPhoto;
}

  upload() 
{
    this.currentFileUpload = this.selectedFiles.item(0);
    console.log("File name: "+ this.selectedFiles.item(0).name);
    this.assImage="http://127.0.0.1:8888/"+this.selectedFiles.item(0).name;
     this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');       
      }
    });
    this.selectedFiles = undefined;
}

  public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
}