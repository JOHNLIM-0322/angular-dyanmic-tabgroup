import { Injectable } from '@angular/core';
import { ITab } from './tab.model';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabs: ITab[] = [];
  tabOptions: ITab[] = [
    { name: 'Page1', url: '/page1?param=1' }, 
    { name: 'Page2', url: '/page2?param=2' }, 
    { name: 'Page3', url: '/page3?param=3' }
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

  deleteTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
