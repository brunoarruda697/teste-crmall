import { MockCupomService } from './../../shared/services/mock-cupom.service';
import { OrderService } from './../../shared/services/order.service';
import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})

export class ComicsComponent implements OnInit {
  allComics = [];
  paginator: object = { limit: 5, total: '', count: 5, offset: 0 };
  loading: boolean;
  cupoms: any;

  constructor(
    private marvelApi: ApiService,
    private orderService: OrderService,
    private mockCupomService: MockCupomService,
  ) { }

  ngOnInit(): void {
    this.getComics();
    this.mockCupomService.getAllCupoms().then(({data}) => {
      this.cupoms = data.data;
    });
  }

  getComics(params?: object) {
    this.loading = true;
    this.marvelApi.getAllComics(params).subscribe((response: any) => {
      const { data } = response;
      this.loading = false;
      this.allComics = data.results;
      const tenPercent = this.getNumberFromPercentage(10, data.results.length);
      const randomComics = this.getRandomizedItemsFromArray(tenPercent, data.results);
      randomComics.forEach(comic => {
        comic.isRare = true;
        this.allComics.push(comic);
      });
      this.allComics.sort(() => Math.random() - 0.5);
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
    if (!page.search) {
      this.getComics({ limit: page.pageSize, offset: page.pageIndex * page.pageSize });
      return;
    }
    this.getComics({ titleStartsWith: page.search, limit: page.pageSize, offset: page.pageIndex * page.pageSize });
  }

  getNumberFromPercentage(percentage, total) {
    return Math.round((percentage / 100) * total);
  }

  getRandomizedItemsFromArray(numberOfRandom, array) {
    const newArray = [];
    for (let index = 0; index < numberOfRandom; index++) {
      const rand = array[Math.floor(Math.random() * array.length)];
      newArray.push(rand);
      this.allComics = this.allComics.filter(item => item !== rand);
    }
    return newArray;
  }

  onCheck(comic, event) {
    const { checked } = event;
    if (checked) {
      const cupom = comic.isRare ? this.cupoms.filter(item => item.isRare) : this.cupoms.filter(item => !item.isRare);
      comic.prices[0].price = this.getDiscount(comic.prices[0].price, cupom[0].discount);
    }
    this.orderService.selectComic(comic, checked);
  }

  getDiscount(value, percentage) {
    return value - (value * (percentage / 100));
  }
}
