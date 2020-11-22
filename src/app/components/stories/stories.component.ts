import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  allStories: Observable<any>;
  paginator: object = { limit: 5, total: '', count: 5, offset: 0 };
  loading: boolean;
  displayedColumns: string[] = ['title'];

  constructor(private marvelApi: ApiService) { }

  ngOnInit(): void {
    this.getStories();
  }

  getStories(params?: object): void {
    this.loading = true;
    this.marvelApi.getAllStories(params).subscribe((response: any) => {
      const { data } = response;
      console.log(data);
      this.loading = false;
      this.allStories = data.results;
      const { results, ...dataInformations } = data;
      this.paginator = dataInformations;
    });
  }

  onSearch(value: string): void {
    if (!value) {
      this.getStories();
      return;
    }
    this.getStories({ modifiedSince: value });
  }

  onPageChanged(page: any): void {
    if (!page.search) {
      this.getStories({ limit: page.pageSize, offset: page.pageIndex * page.pageSize });
      return;
    }
    this.getStories({ modifiedSince: page.search, limit: page.pageSize, offset: page.pageIndex * page.pageSize });
  }
}
