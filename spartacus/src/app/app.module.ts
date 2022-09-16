import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { provideConfig } from "@spartacus/core";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';

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
    BrowserTransferStateModule
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
          currency: ['USD'],
          language: ['en'],
          baseSite: ['electronics-spa']
        },
        i18n: {
          fallbackLang: 'en'
        }
      }],
    }
  }
}
