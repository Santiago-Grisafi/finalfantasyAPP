import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsObjectComponent } from './components/details-object/details-object.component';
import { DetailsObjects2Component } from './components/details-objects2/details-objects2.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "home/:id", component: DetailsObjectComponent },
  { path: "home/m/:id", component: DetailsObjects2Component },
  { path: "**", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
