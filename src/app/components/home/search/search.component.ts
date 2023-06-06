import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { Monster } from 'src/app/interfaces/monster.interface';
import { CharactersService } from 'src/app/services/characters.service';
import { MonstersService } from 'src/app/services/monsters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private charactersService: CharactersService, private monstersService: MonstersService) { }

  data: any[] = [];
  selected: string = "";
  showAlert: boolean = false;

  @ViewChild('searchInput') searchInput!: ElementRef<any>;
  @Output() setData: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() setFilter: EventEmitter<string> = new EventEmitter<string>();
  @Output() setInput: EventEmitter<string> = new EventEmitter<string>();

  searchData = () => {
    if (this.selected != "characters" && this.searchInput.nativeElement.value.trim().length >= 1) {
      this.monstersService.getMonstersByName(this.searchInput.nativeElement.value).subscribe((monsters: Monster[]) => {
        this.setData.emit(monsters);
        this.setFilter.emit("monsters");
        this.setInput.emit(this.searchInput.nativeElement.value);
      }, (err) => {return this.showAlert=true});
    } else if (this.searchInput.nativeElement.value.trim().length >= 1) {
      this.charactersService.getCharactersByName(this.searchInput.nativeElement.value).subscribe((characters: Character[]) => {
        this.setData.emit(characters);
        this.setFilter.emit("characters");
      }, (err) => {return this.showAlert=true})
    }
  }
}
