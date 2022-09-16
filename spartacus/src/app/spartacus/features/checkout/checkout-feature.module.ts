import { NgModule } from '@angular/core';
import { CheckoutModule } from "@spartacus/checkout";
import { checkoutTranslationChunksConfig, checkoutTranslations } from "@spartacus/checkout/assets";
import { CheckoutRootModule, CHECKOUT_FEATURE } from "@spartacus/checkout/root";
import { CmsConfig, I18nConfig, provideConfig } from "@spartacus/core";

@NgModule({
  declarations: [],
  imports: [
    CheckoutRootModule,
    CheckoutModule
  ],
  providers: [provideConfig(<I18nConfig>{
    i18n: {
      resources: checkoutTranslations,
      chunks: checkoutTranslationChunksConfig,
    },
  }),
  provideConfig(<CmsConfig>{
    featureModules: {
      [CHECKOUT_FEATURE]: {
        module: () =>
          import('@spartacus/checkout').then((m) => m.CheckoutModule),
      },
    }
  })
  ]
})
export class CheckoutFeatureModule { }
