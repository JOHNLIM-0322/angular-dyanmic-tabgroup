import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit, OnDestroy {

  @ViewChild('num1') num1!: ElementRef;
  @ViewChild('num2') num2!: ElementRef;

  number1=0;
  number2=0;

  @Input() tabIndex:Number = 0
  @Input() componentUrl:string = ''
  sumValue=0;
  number = 0;
  isDisabled = false;

  constructor(private router: Router){

  }

  add2Number(){
    this.number1 = this.num1.nativeElement.value as number;
    this.number2 = this.num2.nativeElement.value as number;
    this.sumValue = this.number1 + this.number2;
  }

  disabledInput(){
   this.isDisabled = true;
  }

  ngOnInit(): void {
      // this.router.navigateByUrl(this.componentUrl)
      this.number = Math.floor((Math.random() * 10000) + 1);
      console.log("on init: ", this.number);
  }

  ngOnDestroy(): void {
    console.log('on destroy: ', this.number);
  }

}
