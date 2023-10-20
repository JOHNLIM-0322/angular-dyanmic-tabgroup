import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {

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
