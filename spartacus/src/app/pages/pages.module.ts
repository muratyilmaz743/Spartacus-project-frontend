import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CmsConfig, ConfigModule} from '@spartacus/core';
import { SaleComponent } from "./sale/sale.component";
import { MediaModule } from '@spartacus/storefront';

@NgModule({
  declarations: [
    SaleComponent
  ],
  imports: [
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        salebanner: {
          component: SaleComponent,
        },
      },
    } as CmsConfig),
  ]
})
export class PagesModule { }
