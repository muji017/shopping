import { Component } from '@angular/core';
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
    private service: ProductService
    
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
    
  }
}
