import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Monster } from "../interfaces/monster.interface";

@Injectable({
    providedIn: 'root',
})
export class MonstersService {

    private params = {
        url: "https://www.moogleapi.com/api/v1",
    }

    constructor(private http: HttpClient) { }

    getMonsters = (): Observable<Monster[]> => {
        return this.http.get<Monster[]>(`${this.params.url}/monsters`);
    }

    getMonstersById = (id: string): Observable<Monster> => {
        return this.http.get<Monster>(`${this.params.url}/monsters/${id}`);
    }

    getMonstersByName = (name: string): Observable<Monster[]> => {
        return this.http.get<Monster[]>(`${this.params.url}/monsters/search?name=${name}`);
    }

}