import { ApiService } from './../../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  comic = {
    title: '',
    thumbnail: {
      path: '',
      extension: ''
    },
    dates: [],
    prices: [],
    creators: { items: []}
  };
  loading: boolean;
  id: any;

  constructor(
    private marvelApi: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getComic(this.id);
  }

  getComic(id: any): void {
    this.loading = true;
    this.marvelApi.getComic(id).subscribe((response: any) => {
      const { data } = response;
      this.loading = false;
      this.comic = data.results[0];
    });
  }

  back(): void {
    this.router.navigate(['/comics']);
  }
}
