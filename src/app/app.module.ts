import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {DataService} from './services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { SingleFileUploadComponent } from './single-file-upload/single-file-upload.component';

import { AppRoutingModule } from './app-routing.module';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes }   from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

import {  routingComponents } from './app-routing.module';
import { StudentsModule } from './students/students.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { TableFiltersModule } from './table-filters/table-filters.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UploadService } from './upload.service';

import { DropdownService } from './services/dropdown.service';


import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [ 
    AppComponent,
    SingleFileUploadComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    StudentsModule,
    DialogsModule,
    TableFiltersModule,
    NgbModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),



    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, // <--added
    FormsModule, // <--added
    ReactiveFormsModule, // <--added
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, // <--added
    FormsModule, // <--added
    ReactiveFormsModule, // <--added
    AngularMaterialModule, // <--added
    AppRoutingModule,
    FormsModule, // required for input file change detection
    ReactiveFormsModule,
    HttpClientModule, // this is required for the actual http request
    MatFormFieldModule,
    MatSelectModule, 
    
    AppRoutingModule

  

  ],
  providers: [
    DataService
],
bootstrap: [AppComponent]


})
export class AppModule { }