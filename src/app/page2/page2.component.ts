import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit  {
  
  param: number= 0;
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.param = params['param'];
      }
    );
  }


}
