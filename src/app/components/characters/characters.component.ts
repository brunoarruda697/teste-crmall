import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private marvelApi: ApiService) { }

  ngOnInit(): void {
    const md5 = new Md5();
    const teste = md5.appendStr('1')
    .appendStr('05bd44433abd1771c09085b0f61cae6d358642dd').appendStr('44353bf392db72cda5d938161de529dd').end().toString();
    console.log(teste);
    this.marvelApi.getCharacters();
  }

}
