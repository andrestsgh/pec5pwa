import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { ListCharacters } from '../models/list-character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<any> {
    return this.http.get<ListCharacters>(this.apiUrl+'character/?page='+page);
  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get<Character>(this.apiUrl+'character/'+id);
  }
}

