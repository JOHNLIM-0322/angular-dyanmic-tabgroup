import { Component, OnInit } from '@angular/core';
import { TabService } from '../tab.service';
import { ITab } from '../tab.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuOptions: ITab[] = [];

  constructor(private tabService: TabService, private router: Router){}

  ngOnInit(): void {
     this.menuOptions = this.tabService.tabOptions;
  }

  openTab(url: string) {
    //console.log('url: ' + url);
    this.tabService.addTab(url);
    this.router.navigateByUrl(url, {skipLocationChange: true});
  }
}
