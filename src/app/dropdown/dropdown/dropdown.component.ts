import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  selectedText: string;
  items: Array<{id: number, text: string}>;

  constructor() { }

  ngOnInit() {
    this.items = new Array<{id: number, text: string}>();
    this.selectedText = "testing";
  }

}