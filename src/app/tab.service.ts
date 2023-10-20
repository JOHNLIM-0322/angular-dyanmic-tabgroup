import { Injectable } from '@angular/core';
import { ITab } from './tab.model';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabs: ITab[] = [];

  // tabOptions records will be loaded from the Server
  tabOptions: ITab[] = [
    { name: 'Page1', url: '/page1?param=1' }, 
    { name: 'Page2', url: '/page2?param=2' }, 
    { name: 'Page3', url: '/page3?param=3' },
    { name: 'Page4', url: '/page4?param=4' },
    { name: 'Page5', url: '/page5?param=5' },
    { name: 'Page6', url: '/page6?param=6' },
  ];
  constructor() {}

  addTab(url: string) {
    const tab = this.getTabOptionByUrl(url);
    
    if (tab != null) {
      if (!this.tabs.includes(tab)) {
        this.tabs.push(tab);
      }
    }
  }

  getTabOptionByUrl(url: string): ITab | undefined {
    return this.tabOptions.find(tab => tab.url === url);
  }

  deleteTab(index: number, activatedUrl: string) {
    let deletedTab = this.tabs[index];

    this.tabs.splice(index, 1);
    if (deletedTab.url === activatedUrl) {
      if (this.tabs.length > 0) {
        // activated the page on the left
        return this.tabs[index-1];
      }
    } else {
      // No, do nothing, let the activated tab be activated
    }



    return null;
  }
}
