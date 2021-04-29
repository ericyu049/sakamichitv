
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MaterialModule } from './material.module';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { TopNavComponent } from './component/top-nav/top-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewerComponent } from './component/viewer/viewer.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppEffects } from './store/app.effect';
import { AppReducer } from './store/app.reducer';
import { AppService } from './service/app.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    TopNavComponent,
    ViewerComponent,
    
  ],
  imports: [
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({'haha': AppReducer}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Doc-View DevTools',
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [
    {provide: AppService, useClass: AppService}
  ],
  bootstrap: [AppComponent]
})
export class SakamichiTVModule { }
