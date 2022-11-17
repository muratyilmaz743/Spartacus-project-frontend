import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from '@spartacus/core';
import {CurrentProductService} from '@spartacus/storefront';

@Component({
  selector: 'app-pdp-header',
  templateUrl: './pdp-header.component.html',
  styleUrls: ['./pdp-header.component.scss']
})
export class PdpHeaderComponent implements OnInit {

  // @ts-ignore
  product$ : Observable<Product> = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) {
}

  ngOnInit(): void {
  }

}
