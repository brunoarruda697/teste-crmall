import { Observable } from 'rxjs';
import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  allSeries: Observable<any>;
  paginator: object = { limit: 5, total: '', count: 5, offset: 0 };
  loading: boolean;

  constructor(private marvelApi: ApiService) { }

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries(params?: object): void {
    this.loading = true;
    this.marvelApi.getAllSeries(params).subscribe((response: any) => {
      const { data } = response;
      this.loading = false;
      this.allSeries = data.results;
      const { results, ...dataInformations } = data;
      this.paginator = dataInformations;
    });
  }

  onSearch(value: string): void {
    if (!value) {
      this.getSeries();
      return;
    }
    this.getSeries({ titleStartsWith: value });
  }

  onPageChanged(page: any): void {
    if (!page.search) {
      this.getSeries({ limit: page.pageSize, offset: page.pageIndex * page.pageSize });
      return;
    }
    this.getSeries({ titleStartsWith: page.search, limit: page.pageSize, offset: page.pageIndex * page.pageSize });
  }
}
