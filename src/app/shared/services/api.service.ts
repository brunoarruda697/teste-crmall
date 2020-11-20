import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'https://gateway.marvel.com/v1/public';
  data;

  constructor(private httpClient: HttpClient) { }

  public getCharacters(){
    this.httpClient.get(`${this.BASE_URL}/characters`).subscribe(data => this.data = data);
    return this.data;
  }
}
