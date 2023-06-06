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
  showErr: boolean = false;
  term: string = "";

  @ViewChild('searchInput') searchInput!: ElementRef<any>;
  @Output() setData: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() setFilter: EventEmitter<string> = new EventEmitter<string>();
  @Output() setInput: EventEmitter<string> = new EventEmitter<string>();

  searchData = () => {
    if (this.selected.trim().length == 0) {
      this.showAlert = true;
    }
    if (this.selected == "monsters" && this.searchInput.nativeElement.value.trim().length >= 1) {
      this.monstersService.getMonstersByName(this.searchInput.nativeElement.value).subscribe((monsters: Monster[]) => {
        if (monsters.length >= 1) {
          this.setData.emit(monsters);
          this.setFilter.emit("monsters");
          this.setInput.emit(this.searchInput.nativeElement.value);
          this.reset();
          this.term = this.searchInput.nativeElement.value;
          this.showAlert = false;
          this.showErr = false;
        } else {
          this.showErr = true;
          this.setData.emit([]);
          this.term = this.searchInput.nativeElement.value;
          this.showAlert = false;
        }
      });
    } else if (this.searchInput.nativeElement.value.trim().length >= 1 && this.selected == "characters") {
      this.charactersService.getCharactersByName(this.searchInput.nativeElement.value).subscribe((characters: Character[]) => {
        if (characters.length >= 1) {
          this.setData.emit(characters);
          this.setFilter.emit("characters");
          this.setInput.emit(this.searchInput.nativeElement.value);
          this.reset();
          this.term = this.searchInput.nativeElement.value;
          this.showAlert = false;
          this.showErr = false;
        } else {
          this.showErr = true;
          this.setData.emit([]);
          this.term = this.searchInput.nativeElement.value;
          this.showAlert = false;
        }
      });
    }
  }

  reset = () => {
    return this.searchInput.nativeElement.value = "";
  }

  showErrors = (value: boolean) => {
    return this.showAlert = value;
  }
}
