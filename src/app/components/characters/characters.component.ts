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
  loading: boolean;

  constructor(private marvelApi: ApiService) { }

  ngOnInit(): void {
    this.loading = true;
    this.getCharacters();
  }

  getCharacters() {
    this.marvelApi.getAllCharacters().subscribe((data: any) => {
      this.loading = false;
      this.allCharacters = data.data.results;
    });
  }

}
