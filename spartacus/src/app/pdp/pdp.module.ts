import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {CmsConfig, ConfigModule} from '@spartacus/core';
import {StarRatingModule} from "@spartacus/storefront";
import { PdpHeaderComponent } from './pdp-header/pdp-header.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    PdpHeaderComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: ProductDetailComponent
        },
        BreadcrumbComponent : {
          component: PdpHeaderComponent
        }
      },
    } as CmsConfig),
    StarRatingModule
  ]
})
export class PdpModule { }
