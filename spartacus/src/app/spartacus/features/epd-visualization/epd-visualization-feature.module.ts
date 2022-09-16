import { NgModule } from '@angular/core';
import { CmsConfig, I18nConfig, provideConfig } from "@spartacus/core";
import { epdVisualizationTranslationChunksConfig, epdVisualizationTranslations } from "@spartacus/epd-visualization/assets";
import { EpdVisualizationConfig, EpdVisualizationRootModule, EPD_VISUALIZATION_FEATURE } from "@spartacus/epd-visualization/root";

@NgModule({
  declarations: [],
  imports: [
    EpdVisualizationRootModule
  ],
  providers: [provideConfig(<CmsConfig>{
    featureModules: {
      [EPD_VISUALIZATION_FEATURE]: {
        module: () =>
          import('@spartacus/epd-visualization').then((m) => m.EpdVisualizationModule),
      },
    }
  }),
  provideConfig(<I18nConfig>{
    i18n: {
      resources: epdVisualizationTranslations,
      chunks: epdVisualizationTranslationChunksConfig,
    },
  }),
  provideConfig(<EpdVisualizationConfig>{
    epdVisualization: {
      ui5: {
        bootstrapUrl: "https://sapui5.hana.ondemand.com/1.97.0/resources/sap-ui-core.js"
      },

      apis: {
        baseUrl: "https://localhost:9002"
      }
    }
  })
  ]
})
export class EpdVisualizationFeatureModule { }
