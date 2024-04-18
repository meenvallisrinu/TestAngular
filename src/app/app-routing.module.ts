import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { CaptureComponent } from './capture/capture.component';
import { RetrievalComponent } from './retrieval/retrieval.component';



import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

const routes:Routes = [
    {
        path:"capture", component:CaptureComponent
    },
    {
        path:"retrieval", component:RetrievalComponent
    },
    {
        path: 'students',
        loadChildren: () => import('./students/students.module').then(mod => mod.StudentsModule)
    },

    {
        path: '**',
        redirectTo: '/'
    } 
  

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    
})
export class AppRoutingModule {}
export const routingComponents = [CaptureComponent,RetrievalComponent]

