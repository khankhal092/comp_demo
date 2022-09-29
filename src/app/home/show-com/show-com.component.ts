import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-com',
  templateUrl: './show-com.component.html',
  styleUrls: ['./show-com.component.css']
})
export class ShowComComponent implements OnInit, OnChanges {

  constructor() { }
  ngOnInit(): void {
  }
  @Input() item = ''
  ngOnChanges(item: SimpleChanges) {
    console.log(item);
  }

  @Output() parentFunction: EventEmitter<any> = new EventEmitter()
  onkey(val: any) {
    this.parentFunction.emit(val)
  }
}
