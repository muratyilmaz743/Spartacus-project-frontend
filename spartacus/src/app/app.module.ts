import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { PdpModule} from  './pdp/pdp.module';
import { PagesModule} from  './pages/pages.module';

import { translations, translationChunksConfig } from '@spartacus/assets';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    BrowserTransferStateModule,
    PdpModule,
    PagesModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  static withConfig(name?: string): ModuleWithProviders{
    return {
      ngModule: AppModule,
      providers: [{
        backend: {
          occ: {
            baseUrl: 'https://localhost:9002/',
            prefix: '/occ/v2'
          }
        },
        context: {
          baseSite: ['electronics-spa']
        },
        i18n: {
          resources: translations,
          chunks: translationChunksConfig,
        },
      }],
    }
  }
}
