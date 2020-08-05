import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
public products = [
  {
    id: 1,
    name: 'egg',
    category: 'Food',
    description: 'Lorem egg',
    price: 1,
  },
  /*{
    id: 2,
    name: 'egg',
    category: 'Food',
    description: 'Lorem egg',
    price: 1,
  },*/
];
  constructor() { }

  ngOnInit(): void {
  }

}
