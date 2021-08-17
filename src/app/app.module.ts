import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconDefinition } from '@ant-design/icons-angular';
import { MenuFoldOutline, MenuUnfoldOutline, SearchOutline, HomeFill, 
  HistoryOutline, SettingFill, LikeFill, DislikeFill } from '@ant-design/icons-angular/icons';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SideNavComponent } from './component/sidenav/sidenav.component';
import { TopNavComponent } from './component/topnav/topnav.component';
import { AppService } from './service/app.service';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ViewerComponent } from './component/viewer/viewer.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCommentModule } from 'ng-zorro-antd/comment';
registerLocaleData(en);
const icons: IconDefinition[] = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  SearchOutline,
  HomeFill,
  HistoryOutline,
  SettingFill,
  LikeFill,
  DislikeFill
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    SideNavComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NzInputModule,
    NzButtonModule,
    NzGridModule,
    NzMenuModule,
    NzAvatarModule,
    NzDividerModule,
    NzTypographyModule,
    NzListModule,
    NzCommentModule,
    NzIconModule.forRoot(icons)
  ],
  providers: [
    { provide: AppService, useClass: AppService },
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
