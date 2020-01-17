import { Component, OnInit } from '@angular/core';



const ELEMENT_DATA: any = [
  { position: 1, nopipe: 'Hydrogen', pipe: 'Hydrogen', },
  { position: 2, nopipe: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ex expedita laboriosam ut aliquam unde ab,', pipe: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ex expedita laboriosam ut aliquam unde ab,', },

];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nopipe', 'pipe'];
  dataSource = ELEMENT_DATA ;

  constructor() { }

  ngOnInit() {
  }

}
