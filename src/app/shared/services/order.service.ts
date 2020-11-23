import { EventEmitter } from '@angular/core';

export class OrderService {
  public comicEmitter$: EventEmitter<any>;

  constructor() {
    this.comicEmitter$ = new EventEmitter();
  }

  selectComic(comic: any, checked: boolean): void {
    this.comicEmitter$.emit({ comic, checked });
  }
}
