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
  paginator: object = { limit: 5, total: '', count: 5, offset: 0 };
  loading: boolean;

  constructor(private marvelApi: ApiService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(params?: object): void {
    this.loading = true;
    this.marvelApi.getAllCharacters(params).subscribe((data: any) => {
      this.loading = false;
      this.allCharacters = data.data.results;
      const { results, ...dataInformations } = data.data;
      this.paginator = dataInformations;
    });
  }

  onSearch(value: string): void {
    if (!value) {
      this.getCharacters();
      return;
    }
    this.getCharacters({ nameStartsWith: value });
  }

  onPageChanged(page: any): void {
    if (!page.search) {
      this.getCharacters({ limit: page.pageSize, offset: page.pageIndex * page.pageSize });
      return;
    }
    this.getCharacters({ nameStartsWith: page.search, limit: page.pageSize, offset: page.pageIndex * page.pageSize });
  }
}
