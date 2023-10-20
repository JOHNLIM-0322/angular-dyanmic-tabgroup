import { Component, OnInit } from '@angular/core';
import { TabService } from '../tab.service';
import { NavigationEnd, Router } from '@angular/router';
import { ITab } from '../tab.model';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  tabs: ITab[] = [];
  activeTabUrl: string = '';
  active =1;
  constructor(private tabService: TabService, private router: Router) {}

  ngOnInit(): void {
    this.tabs = this.tabService.tabs;

    //console.log('main-content: ' + this.tabs);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeTabUrl = event.urlAfterRedirects;
        if (this.tabs.length === 0) {
          
          this.tabService.addTab(this.activeTabUrl);
        }
      }
    });
  }

  closeTab(index: number, event: Event) {
    
    let nextActiveTab = this.tabService.deleteTab(index, this.activeTabUrl);
    console.log(event);
    event.preventDefault();
    if (nextActiveTab != null) {
      this.router.navigateByUrl(nextActiveTab.url, { skipLocationChange: true});
    }
  }

  onTabChange(event:any) {
    this.router.navigateByUrl(event.nextId, { skipLocationChange: true});
  }
}
