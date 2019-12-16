import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  selectedItem: {id: number, text: string};
  items: Array<{id: number, text: string}>;
  showItems: boolean;

  constructor() { }

  ngOnInit() {
    this.items = new Array<{id: number, text: string}>();
    this.items.push({id: 1, text: 'On Schedule'});
    this.items.push({id: 2, text: 'Behind Schedule'});
    this.items.push({id: 3, text: 'On Hold'});
    this.selectedItem = this.items[0];
    this.showItems = false;
  }

  toggleList() {
    this.showItems = !this.showItems;
  }
}