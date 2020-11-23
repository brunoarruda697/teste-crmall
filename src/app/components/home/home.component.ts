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
  constructor(private orderService: OrderService) { orderService.comicEmitter$.subscribe(item => this.getComicForOrder(item)); }

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
    this.totalPrice = array.filter(item => item).reduce(
      (sum, current) => sum + current.prices.reduce(
        (sum, current) => sum + current.price, 0), 0);
    console.log(this.comicsArray);
    console.log(this.totalPrice, 'total');
  }
}
