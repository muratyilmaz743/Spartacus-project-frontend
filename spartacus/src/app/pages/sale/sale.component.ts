import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// @ts-ignore
import { CmsBannerComponent } from '@spartacus/core'
import { CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  data$: Observable<CmsBannerComponent> = this.componentData.data$;

  constructor(private componentData: CmsComponentData<CmsBannerComponent>) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
