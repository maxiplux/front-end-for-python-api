import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',

})
export class ProductsComponent implements OnInit{

  products: Product[] = [];
  constructor(private productService: ProductService, private router: Router) {    }

  ngOnInit(): void {
        this.productService.getProducts().subscribe(products => {
              this.products = products;
        });
    }

  addProduct() {
    this.router.navigate(['/dashboard/products/create']);

  }
}
