import { Component, OnInit, HostListener } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export interface DropdownItem {
  id: number;
  text: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  selectedItem: DropdownItem;
  items: Array<DropdownItem>;
  showItems: boolean;

  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
    if (this.showItems) {
      this.showItems = false;
    }
  }

  constructor() { }

  ngOnInit() {
    this.items = new Array<DropdownItem>();
    this.items.push({id: 1, text: 'On Schedule'});
    this.items.push({id: 2, text: 'Behind Schedule'});
    this.items.push({id: 3, text: 'On Hold'});
    this.items.push({id: 2, text: 'Behind Schedule'});
    this.items.push({id: 3, text: 'On Hold'});
    this.items.push({id: 2, text: 'Behind Schedule'});
    this.items.push({id: 3, text: 'On Hold'});
    this.items.push({id: 2, text: 'Behind Schedule'});
    this.items.push({id: 3, text: 'On Hold'});
    this.selectedItem = this.items[0];
    this.showItems = false;
  }

  selectItem($e: DropdownItem) {
    this.selectedItem = $e;
  }

  toggleList($event) {
    $event.stopPropagation();
    this.showItems = !this.showItems;
  }
}