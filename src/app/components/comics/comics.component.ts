import { ApiService } from './../../shared/services/api.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  allComics: Observable<any>;
  paginator: object = { limit: 5, total: '', count: 5, offset: 0 };
  loading: boolean;

  constructor(private marvelApi: ApiService) { }

  ngOnInit(): void {
    this.getComics();
  }

  getComics(params?: object) {
    this.loading = true;
    this.marvelApi.getAllComics(params).subscribe((data: any) => {
      this.loading = false;
      this.allComics = data.data.results;
      const { results, ...dataInformations } = data.data;
      this.paginator = dataInformations;
    });
  }

  onSearch(value: string) {
    if (!value) {
      this.getComics();
      return;
    }
    this.getComics({ titleStartsWith: value });
  }

  onPageChanged(page) {
    this.getComics({ titleStartsWith: page.search, limit: page.pageSize, offset: page.pageIndex * page.pageSize });
  }
}
