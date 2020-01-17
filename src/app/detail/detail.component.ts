import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {


  text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ex expedita laboriosam ut aliquam unde ab';
  number = [1, 2, 3, 4, 5, 6, 7, 8];
  upper = `this.value = this.value.toUpperCase()`;
  constructor() { }

  ngOnInit() {
  }

}
