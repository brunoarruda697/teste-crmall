import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.css']
})
export class PageCardComponent implements OnInit {
  @Input() name: string;
  @Input() searchPlaceholder: string;
  @Input() paginator: object;
  @Output() search = new EventEmitter<string>();
  @Output() pageEvent = new EventEmitter<any>();
  pageSizeOptions: number[] = [5, 10, 20];

  constructor() { }

  ngOnInit(): void {
    this.checkRequiredFields();
  }

  checkRequiredFields() {
    if (!this.name) {
      throw new Error('attribute name is required');
    }
  }

  onEnter(value: string) {
    this.search.emit(value);
  }

  onPage(event: Event) {
    this.pageEvent.emit(event);
  }
}
