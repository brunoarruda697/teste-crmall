import { MockCupomService } from './../../shared/services/mock-cupom.service';
import { OrderService } from './../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comic: any;
  comicsArray: any[];
  totalPrice: any;

  constructor(private orderService: OrderService) {
    this.orderService.comicEmitter$.subscribe(item => this.getComicForOrder(item));
  }

  ngOnInit(): void {
    this.comic = {};
    this.comicsArray = [];
    this.totalPrice = 0;
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
    this.totalPrice = array.reduce(
      (firstSum, firstArray) => firstSum + firstArray.prices.reduce(
        (secondSum, secondArray) => secondSum + secondArray.price, 0), 0);
  }
}
