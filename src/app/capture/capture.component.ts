import { Component, OnInit } from '@angular/core';
import { ElementRef,  ViewChild} from '@angular/core';
import {DataService} from '..//services/data.service';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Issue} from '../models/issue';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { DropdownService } from '../services/dropdown.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { throwError } from "rxjs";
import { UploadService } from '../upload.service';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ThemePalette} from '@angular/material/core';


@Component({
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css'],
  
  
})



export class CaptureComponent implements OnInit {
  displayedColumns = ['id', 'title', 'state', 'url', 'created_at', 'updated_at', 'actions'];

  status: "initial" | "uploading" | "success" | "fail" = "initial";
  file: File | null = null;
  files: File[] = [];


  exampleDatabase: DataService | null;

  index: number;
  id: number;
  selectedEnvironment: string;
  selectedApplication: string;
  selectedServers: string;
  
  serverList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


              title = 'Country-State-City Dropdown';
              public loading = false;
              public dropdownForm!: FormGroup;
              
              public applications: any[] = [];
              public environments: any[] = [];
              public servers: any[] = [];
              serverNames = new FormControl('');
              public cities: any[] = [];

  constructor(public http: HttpClient,
    public dialog: MatDialog,
    public dataService: DataService,private dropdownService: DropdownService,
    private formBuiler: FormBuilder,private uploadService: UploadService) {}

       
    ngOnInit(): void {
      /**
       * Intialize form with default value null
       */
   
      this.dropdownForm = this.formBuiler.group({
        application: [null],
        environment: [null],
        city: [null],
      });
      /**
       * load all country data at page load
       */
      console.log("In oninit");
      this.getApplications();

    }

    
  onChange(event: any) {

    let fileList: FileList = event.target.files;

    if (fileList.length < 1) {
      return;
    }
    
     this.file = fileList[0];
/*
    const files = event.target.files;

    if (files.length) {
      this.status = "initial";
      this.files = files;
    }
    */
  }
 /*
  onUpload() {
   if (this.files.length) {
      const formData = new FormData();

      [...this.files].forEach((file) => {
        formData.append("file", file, file.name);
      });
     
      const formData = new FormData();

      const upload$ = this.http.post("https://httpbin.com/post", formData);

      this.status = "uploading";

      upload$.subscribe({
        next: () => {
          this.status = "success";
        },
        error: (error: any) => {
          this.status = "fail";
          return throwError(() => error);
        },
      });
    }
  }
 */
  
      
              /**
               * loads all country data
               * @returns void
               */
              private getApplications() {
                this.loading = true;
                console.log("In getApplications");
                this.dropdownService.getApplications().subscribe(
                  (response) => {
                    console.log("response.data:"+response);
                    this.applications = response;
                    console.log("response.applications:"+this.applications);
                    this.loading = false;
                  },
                  (error) => {
                    console.log('Something went wrong: ', error);
                  }

                  
                );

                console.log("At the end of getApplications");
              }
   
              public selectEnvironments() {
                this.loading = true;
                console.log("In getEnvironments");
                this.dropdownService.getEnvironments().subscribe(
                  (response) => {
                    console.log("response.data:"+response);
                    this.environments = response;
                    console.log("response.environments:"+this.environments);
                    this.loading = false;
                  },
                  (error) => {
                    console.log('Something went wrong: ', error);
                  }

                  
                );

                console.log("At the end of getEnvironments");
              }
   

              /**
               * Selects the state and gets cities for it
               * @param servers
               * @returns void
               */
              public selectServers(env: any) {
                 this.loading = true;
                console.log("In selectServers");
                this.dropdownService.getServers(17303,env).subscribe(
                  (response) => {
                    console.log("response.data:"+response);
                    this.servers = response;
                    console.log("response.servers:"+this.servers);
                    this.loading = false;
                  },
                  (error) => {
                    console.log('Something went wrong: ', error);
                  }

                );
              
              }


                 /**
               * Selects the state and gets cities for it
               * @param servers
               * @returns void
               */
         

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;

  upload() {


    if (this.file) {
      this.uploadService.uploadfile(this.file,this.selectedApplication,this.selectedEnvironment,this.selectedServers).subscribe(resp => {
        alert("Uploaded")
      })
    } else {
      alert("Please select a file first")
    }
  }

}

