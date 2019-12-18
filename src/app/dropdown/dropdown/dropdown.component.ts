import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';
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
  @Input()
  items: Array<DropdownItem>;
  showItems: boolean;

  @Output()
  change: EventEmitter<DropdownItem> = new EventEmitter<DropdownItem>();

  arrowPointerIndex = 0;

  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
    if (this.showItems) {
      this.showItems = false;
    }
  }

  @HostListener('document:keyup', ['$event'])
  keyboardEvent(event: any): void {
    console.log(event.keyCode);
    // up and down arrow keys 38 and 40
    if (this.showItems) {
      
      switch(event.keyCode) {
        case 40: // down arrow
        break;

        case 38: // up arrow
        break;

        case 27:  // esc
        this.showItems = false;
        break;

        case 13:  // return
        this.showItems = false;
        break;

      }
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

  selectItem($e, item: DropdownItem) {
    $e.stopPropagation();
    this.selectedItem = item;
    this.showItems = false;
  }

  toggleList($event) {
    $event.stopPropagation();
    this.showItems = !this.showItems;
  }
}