import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Tab {
  id: string;
  title: string;
  active: boolean;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input()
  tabs: Array<Tab>;
  currentTab: Tab;

  @Output()
  changeTab: EventEmitter<Tab> = new EventEmitter<Tab>();

  constructor() { }

  ngOnInit() {
    this.tabs = new Array<Tab>();
    this.tabs.push({id: 'tab1', title: 'Planning', active: true});
    this.tabs.push({id: 'tab2', title: 'In Progress', active: false});
    this.tabs.push({id: 'tab3', title: 'Completed', active: false});
    this.currentTab = this.tabs[0];
  }

  selectTab($e, tab: Tab) {
    $e.stopPropagation();
    this.tabs.map(t => t.active = false);
    tab.active = true;
    this.currentTab = tab;
    this.changeTab.emit(tab);
  }

}