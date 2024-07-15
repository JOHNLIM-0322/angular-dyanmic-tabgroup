import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent {
  tabs: { id: number, url:string }[] = [];
  selectedIndex = 0;

  addTab() {
    let tabsLength = this.tabs.length + 1;
    this.tabs.push({ id: this.tabs.length, url:'/page' + ( this.tabs.length + 1)});
    this.selectedIndex = this.tabs.length - 1;
  }

  selectTab(index: number) {
    this.selectedIndex = index;
  }
}
