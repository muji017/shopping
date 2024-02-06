import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  private dataSubscription: Subscription[]=[]
  constructor(
    private service: ProductService,
    private router:Router
    ) {
  }
  ngOnInit() {
    this.getProducts()
  }

  search() {
     const serchSub= this.service.getSearchProduct(this.key).subscribe((res)=>{
      this.products=res.products
     })
     this.dataSubscription.push(serchSub)
  }
  getProducts() {
    const getSub=this.service.getAllProducts().subscribe((res) => {
      this.products = res.products
    })
    this.dataSubscription.push(getSub)
  }
  viewProduct(id:number){
    console.log(id);
    
    this.router.navigate(['/product-details',id])
  }
  ngOnDestroy(){
     this.dataSubscription.forEach(sub => {
      sub.unsubscribe()
    });
  }
}
