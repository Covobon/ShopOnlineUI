import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../module/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  
  constructor() {}
  ngOnInit() {
    console.log(this.product)
  }

  getUrlImg() {
    return "http://localhost:8080/api/img/phone/" +this.product.productImages[0].nameImage;
  }
}
