import { Component, OnInit } from '@angular/core';
import {Product} from '@spartacus/core';
import {CurrentProductService} from '@spartacus/storefront';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private currentProductService: CurrentProductService) {
  }

  // @ts-ignore
  product$: Observable<Product> = this.currentProductService.getProduct();

  ngOnInit(): void {
  }

}
