import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

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
