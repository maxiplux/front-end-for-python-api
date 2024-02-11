import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import Swal from 'sweetalert2';

import {Router} from "@angular/router";
@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-create.component.html',

})
export class ProductCreateComponent  implements OnInit {

  productForm!: FormGroup;
  ngOnInit() {
    this.productForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', Validators.required)
    });
  }
  constructor(private productService: ProductService,private router: Router) { }

  saveProduct() {
    if (this.productForm.valid) {

      this.productService.save(this.productForm.value).subscribe(
        (product) =>
        {
          Swal.fire('Product', `Product ${product.title} created! with Id ${product.id}`, 'success');
          this.router.navigate(['/dashboard/products']);

        },
        (error) => {
          Swal.fire('Error', `Error creating product: ${error}`, 'error');

        }
      );

      // Additional logic to authenticate user or
      // perform other actions
    }

  }
}
