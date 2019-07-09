import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from './../../module/product';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    });
    console.log(this.products.length);
  }
}
