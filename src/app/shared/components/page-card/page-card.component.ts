import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.css']
})
export class PageCardComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit(): void {
    this.checkRequiredFields();
  }

  checkRequiredFields() {
    if(!this.name) {
      throw new Error('attribute name is required');
    }
 }
}
