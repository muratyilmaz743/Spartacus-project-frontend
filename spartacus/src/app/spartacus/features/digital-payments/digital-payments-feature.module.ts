import { NgModule } from '@angular/core';
import { I18nConfig, provideConfig } from "@spartacus/core";
import { DigitalPaymentsModule, dpTranslationChunksConfig, dpTranslations } from "@spartacus/digital-payments";

@NgModule({
  declarations: [],
  imports: [
    DigitalPaymentsModule
  ],
  providers: [provideConfig(<I18nConfig>{
    i18n: {
      resources: dpTranslations,
      chunks: dpTranslationChunksConfig,
    },
  })]
})
export class DigitalPaymentsFeatureModule { }
