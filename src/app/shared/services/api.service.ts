import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'https://gateway.marvel.com/v1/public';
  private md5 = new Md5();
  private API_KEY = '44353bf392db72cda5d938161de529dd';
  private HASH = this.md5.appendStr('1')
    .appendStr('05bd44433abd1771c09085b0f61cae6d358642dd')
    .appendStr('44353bf392db72cda5d938161de529dd')
    .end()
    .toString();

  constructor(private httpClient: HttpClient) { }

  public getAllCharacters(params?) {
    return this.httpClient.get(`${this.BASE_URL}/characters?ts=1&apikey=${this.API_KEY}&hash=${this.HASH}`, { params });
  }

  public getAllComics(params?) {
    return this.httpClient.get(`${this.BASE_URL}/comics?ts=1&apikey=${this.API_KEY}&hash=${this.HASH}`, { params });
  }
}
