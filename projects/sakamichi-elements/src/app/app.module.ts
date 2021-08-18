import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HomeComponent } from 'src/app/component/home/home.component';
import { SakamichiTVModule } from 'src/app/app.module';
import { ViewerComponent } from 'src/app/component/viewer/viewer.component';
import { ChannelComponent } from 'src/app/component/channel/channel.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    SakamichiTVModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    customElements.define('home-comp', createCustomElement(HomeComponent, { injector: this.injector }));
    customElements.define('viewer-comp', createCustomElement(ViewerComponent, { injector: this.injector }));
    customElements.define('channel-comp', createCustomElement(ChannelComponent, { injector: this.injector }));
  }
}