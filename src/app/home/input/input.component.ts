import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  value = ''
  data = ''
  constructor() { }
  ngOnInit(): void {
  }

  onPress(data: any) {
    this.data = data
    console.log(data);
  }

  parentComponent(val: any) {
    this.value = val
  }
}
