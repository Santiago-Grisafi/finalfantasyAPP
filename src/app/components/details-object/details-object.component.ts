import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';
import { MonstersService } from 'src/app/services/monsters.service';

@Component({
  selector: 'app-details-object',
  templateUrl: './details-object.component.html',
  styleUrls: ['./details-object.component.css']
})
export class DetailsObjectComponent implements OnInit{

  data!: Character;
  id: any = this.router.snapshot.paramMap.get("id");

  constructor(private charaterService: CharactersService, private router: ActivatedRoute){}
  
  ngOnInit(): void {
    this.charaterService.getCharactersById(this.id).subscribe((character: any)=>{
      return this.data = character[0];
    })
  }



}
