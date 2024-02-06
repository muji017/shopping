import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductList } from 'src/app/model/model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = []
  key!: string 
  constructor(
    private service: ProductService,
    private router:Router
    ) {
  }
  ngOnInit() {
    this.getProducts()
  }

  search() {
     this.service.getSearchProduct(this.key).subscribe((res)=>{
      this.products=res.products
     })
  }
  getProducts() {
    this.service.getAllProducts().subscribe((res) => {
      this.products = res.products
    })
  }
  viewProduct(id:number){
    console.log(id);
    
    this.router.navigate(['/product-details',id])
  }
}
