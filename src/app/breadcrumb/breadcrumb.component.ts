import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface BreadcrumbItem {
  id: number;
  text: string;
  src?: string;
  route?: string;
}

export interface BreadcrumbConfig {
  align: string; // left or right
  orientation: string;  // ltr or rtl
}


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input()
  bcItems: Array<BreadcrumbItem>;

  @Input()
  bcConfig: BreadcrumbConfig;

  constructor() { 
  }

  ngOnInit() {
    this.bcConfig = {
      align: 'left',
      orientation: 'rtl'
    };

    this.bcItems = new Array<BreadcrumbItem>();
    this.bcItems.push({ id: 1, text: 'First Item'});
    this.bcItems.push({ id: 2, text: 'Second Item'});
    this.bcItems.push({ id: 3, text: 'Third Item'});
  }

}