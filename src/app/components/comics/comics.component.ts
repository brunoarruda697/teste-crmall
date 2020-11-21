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
    this.marvelApi.getAllComics(params).subscribe((response: any) => {
      const { data } = response;
      this.loading = false;
      this.allComics = data.results;
      let tenPercent = this.getNumberFromPercentage(10, data.total);
      console.log(tenPercent, '10% do total');
      const { results, ...dataInformations } = data;
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

  getNumberFromPercentage(percentage, total) {
    return Math.round((percentage / 100) * total);
  }
}
