import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Cars } from '../shared/models/cars';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements
  OnInit, 
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
  {

  @Input()carItem!: Cars
  @Input() name!: string

  constructor() {
    console.log('constructor')
  }
  ngOnDestroy(): void {
    console.log('OnDestroy')
  }
  ngAfterViewInit(): void {
    console.log('naAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('naAfterViewChecked')
  }
  ngAfterContentInit(): void {
    console.log('naAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('naAfterContentChecked')
  }
  ngDoCheck(): void {
    console.log('DoCheck')
  }

  ngOnInit(): void {
    console.log('OnInit')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes)
  }
}
