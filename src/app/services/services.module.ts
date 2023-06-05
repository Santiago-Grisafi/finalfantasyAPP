import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from './characters.service';
import { MonstersService } from './monsters.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CharactersService,
    MonstersService
  ]
})
export class ServicesModule { }
