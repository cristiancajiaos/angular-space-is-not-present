import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  numbersOne = [10, 20, 30, 50, 60, 70, 90];
  numbersTwo = [10, 20, 30, 40, 70, 90];
  numbersThree = [20, 40, 60, 70, 80, 90];
  constructor() { }

  ngOnInit(): void {
  }

}
