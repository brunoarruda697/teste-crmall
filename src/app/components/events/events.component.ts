import { Observable } from 'rxjs';
import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  allEvents: Observable<any>;
  paginator: object = { limit: 5, total: '', count: 5, offset: 0 };
  loading: boolean;

  constructor(private marvelApi: ApiService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(params?: object): void {
    this.loading = true;
    this.marvelApi.getAllEvents(params).subscribe((response: any) => {
      const { data } = response;
      this.loading = false;
      this.allEvents = data.results;
      const { results, ...dataInformations } = data;
      this.paginator = dataInformations;
    });
  }

  onSearch(value: string): void {
    if (!value) {
      this.getEvents();
      return;
    }
    this.getEvents({ nameStartsWith: value });
  }

  onPageChanged(page: any): void {
    if (!page.search) {
      this.getEvents({ limit: page.pageSize, offset: page.pageIndex * page.pageSize });
      return;
    }
    this.getEvents({ nameStartsWith: page.search, limit: page.pageSize, offset: page.pageIndex * page.pageSize });
  }
}
