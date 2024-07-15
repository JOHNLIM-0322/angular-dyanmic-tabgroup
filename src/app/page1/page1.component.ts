import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {
  
  param: number= 0;
  number = 0;
  
  @Input() tabIndex:number = 0;
  @Input() componentUrl:string = '';

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.number = Math.floor((Math.random() * 10000) + 1);
    console.log("on init: ", this.number);

    // this.route.queryParams
    //   .subscribe(params => {
    //     this.param = params['param'];
    //   }
    // );
  }

  ngOnDestroy(): void {
      console.log('on destroy: ', this.number);
  }

}
