import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ImgLogoComponent } from './home/img-logo/img-logo.component';
import { SearchComponent } from './home/search/search.component';
import { ResultsComponent } from './home/results/results.component';
import { FormsModule } from '@angular/forms';
import { DetailsObjectComponent } from './details-object/details-object.component';
import { RouterModule } from '@angular/router';
import { DetailsObjects2Component } from './details-objects2/details-objects2.component';



@NgModule({
  declarations: [
    HomeComponent,
    ImgLogoComponent,
    SearchComponent,
    ResultsComponent,
    DetailsObjectComponent,
    DetailsObjects2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    ImgLogoComponent,
    ResultsComponent
  ],
  providers:[

  ]
})
export class ComponentsModule { }
