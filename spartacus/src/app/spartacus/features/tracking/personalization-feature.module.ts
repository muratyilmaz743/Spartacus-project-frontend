import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig } from "@spartacus/core";
import { PersonalizationModule } from "@spartacus/tracking/personalization";
import { PersonalizationRootModule, PERSONALIZATION_FEATURE } from "@spartacus/tracking/personalization/root";

@NgModule({
  declarations: [],
  imports: [
    PersonalizationRootModule,
    PersonalizationModule
  ],
  providers: [provideConfig(<CmsConfig>{
    featureModules: {
      [PERSONALIZATION_FEATURE]: {
        module: () =>
          import('@spartacus/tracking/personalization').then((m) => m.PersonalizationModule),
      },
    }
  })]
})
export class PersonalizationFeatureModule { }
