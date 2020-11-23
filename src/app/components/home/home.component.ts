import { MockCupomService } from './../../shared/services/mock-cupom.service';
import { OrderService } from './../../shared/services/order.service';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comic: any;
  comicsArray: any[];
  totalPrice: any;
  cupoms: any;
  constructor(
    private orderService: OrderService,
    private mockCupomService: MockCupomService,
  ) { orderService.comicEmitter$.subscribe(item => this.getComicForOrder(item)); }

  ngOnInit(): void {
    this.comic = {};
    this.comicsArray = [];
    this.totalPrice = 0;
    this.mockCupomService.getAllCupoms().then(({data}) => {
      this.cupoms = data.data;
      console.log(this.cupoms);
    });
    //console.log(this.cupoms, 'cupoms');
  }

  getComicForOrder(selectedComic) {
    if(selectedComic.checked) {
      this.comicsArray.push(selectedComic.comic);
    } else {
      this.comicsArray = this.comicsArray.filter(item => item !== selectedComic.comic);
    }
    this.getTotalPrice(this.comicsArray);
  }

  getTotalPrice(array) {
    this.totalPrice = array.filter(item => item).reduce(
      (sum, current) => sum + current.prices.reduce(
        (sum, current) => sum + current.price, 0), 0);
  }
}
