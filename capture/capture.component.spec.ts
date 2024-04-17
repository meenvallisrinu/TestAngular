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


@Component({
  selector: 'app-root',
  templateUrl: 'capture.component.html',
  styleUrls: ['./capture.component.css'],
  
})



export class AppComponent implements OnInit {
  displayedColumns = ['id', 'title', 'state', 'url', 'created_at', 'updated_at', 'actions'];

  status: "initial" | "uploading" | "success" | "fail" = "initial";
  file: File | null = null;
  files: File[] = [];


  exampleDatabase: DataService | null;

  index: number;
  id: number;

 
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


              title = 'Country-State-City Dropdown';
              public loading = false;
              public dropdownForm!: FormGroup;
              public countries: any[] = [];
              public states: any[] = [];
              public cities: any[] = [];

  constructor(public http: HttpClient,
    public dialog: MatDialog,
    public dataService: DataService,private dropdownService: DropdownService,
    private formBuiler: FormBuilder,private uploadService: UploadService) {}

  
  onChange(event: any) {
    const files = event.target.files;

    if (files.length) {
      this.status = "initial";
      this.files = files;
    }
  }

  onUpload() {
    if (this.files.length) {
      const formData = new FormData();

      [...this.files].forEach((file) => {
        formData.append("file", file, file.name);
      });

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

  
           
                ngOnInit(): void {
                /**
                 * Intialize form with default value null
                 */
             
                this.dropdownForm = this.formBuiler.group({
                  country: [null],
                  state: [null],
                  city: [null],
                });
                /**
                 * load all country data at page load
                 */
                this.getCountries();
              }
              /**
               * loads all country data
               * @returns void
               */
              private getCountries() {
                this.loading = true;
                this.dropdownService.getCountries().subscribe(
                  (response) => {
                    this.countries = response.data;
                    console.log(this.countries);
                    this.loading = false;
                  },
                  (error) => {
                    console.log('Something went wrong: ', error);
                  }
                );
              }
              /**
               * Selects country, and gets the states for it
               * @param country
               * @returns void
               */
              public selectCountry(country: any) {
                if (!country) {
                  this.dropdownForm.controls['state'].setValue('');
                  this.dropdownForm.controls['city'].setValue('');
                  this.states = [];
                  this.cities = [];
                  return;
                }
                this.loading = true;
                const countryId = parseInt(country);
                this.dropdownService.getStates(countryId).subscribe(
                  (response) => {
                    this.states = response.data;
                    this.loading = false;
                  },
                  (error) => {
                    console.log('Something went wrong: ', error);
                  }
                );
              }
              /**
               * Selects the state and gets cities for it
               * @param state
               * @returns void
               */
              public selectState(state: any) {
                if (!state) {
                  this.dropdownForm.controls['city'].setValue('');
                  this.cities = [];
                  return;
                }
                this.loading = true;
                const stateId = parseInt(state);
                this.dropdownService.getCities(stateId).subscribe(
                  (response) => {
                    this.cities = response.data;
                    this.loading = false;
                  },
                  (error) => {
                    console.log('Something went wrong: ', error);
                  }
                );
              }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;

  upload() {
  
  }

}

