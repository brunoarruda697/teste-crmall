import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  allCharacters: Observable<any>;

  constructor(private marvelApi: ApiService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this.marvelApi.getAllCharacters();
    console.log(this.allCharacters);
  }

}
