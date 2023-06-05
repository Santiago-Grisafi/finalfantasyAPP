import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private params = {
    url: "https://www.moogleapi.com/api/v1",
  }

  constructor(private http: HttpClient) { }


  getCharacters = (): Observable<Character[]> => {
    return this.http.get<Character[]>(`${this.params.url}/characters`);
  }

  getCharactersById = (id: string): Observable<Character> => {
    return this.http.get<Character>(`${this.params.url}/characters/${id}`);
  }

  getCharactersByName = (name: string): Observable<Character[]> => {
    return this.http.get<Character[]>(`${this.params.url}/characters/search?name=${name}`);
  }

}
