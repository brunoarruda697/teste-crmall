import { Observable } from 'rxjs';
import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {
  allCreators: Observable<any>;
  paginator: object = { limit: 5, total: '', count: 5, offset: 0 };
  loading: boolean;

  constructor(private marvelApi: ApiService) { }

  ngOnInit(): void {
    this.getCreators();
  }

  getCreators(params?: object): void {
    this.loading = true;
    this.marvelApi.getAllCreators(params).subscribe((response: any) => {
      const { data } = response;
      this.loading = false;
      this.allCreators = data.results;
      const { results, ...dataInformations } = data;
      this.paginator = dataInformations;
    });
  }

  onSearch(value: string): void {
    if (!value) {
      this.getCreators();
      return;
    }
    this.getCreators({ nameStartsWith: value });
  }

  onPageChanged(page: any): void {
    if (!page.search) {
      this.getCreators({ limit: page.pageSize, offset: page.pageIndex * page.pageSize });
      return;
    }
    this.getCreators({ nameStartsWith: page.search, limit: page.pageSize, offset: page.pageIndex * page.pageSize });
  }
}
