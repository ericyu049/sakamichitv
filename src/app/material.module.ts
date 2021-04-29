import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconDefinition } from '@ant-design/icons-angular';
import {
    DislikeFill,
    EllipsisOutline, EyeFill,
    FlagFill, LeftOutline, LikeFill, MenuFoldOutline, MenuUnfoldOutline,
    PlusOutline, RightOutline, SearchOutline,
    UploadOutline, PlaySquareFill, ClockCircleFill, UserOutline, HomeFill,
    HistoryOutline, HeartFill
} from '@ant-design/icons-angular/icons';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
registerLocaleData(en);


const icons: IconDefinition[] = [
    MenuFoldOutline,
    MenuUnfoldOutline,
    SearchOutline,
    LikeFill,
    DislikeFill,
    LeftOutline,
    RightOutline,
    EyeFill,
    UploadOutline,
    PlusOutline,
    FlagFill,
    EllipsisOutline,
    PlaySquareFill,
    ClockCircleFill,
    UserOutline,
    HomeFill,
    HistoryOutline,
    HeartFill
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        NzLayoutModule,
        NzIconModule.forRoot(icons),
        NzMenuModule,
        NzInputModule ,
        NzDrawerModule,
        FormsModule,
        ReactiveFormsModule,
        NzMessageModule,
        NzModalModule,
        NzDividerModule,
        NzGridModule,
        NzCardModule
    ],
    exports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        NzLayoutModule,
        NzIconModule,
        NzMenuModule,
        NzInputModule,
        NzDrawerModule,
        FormsModule,
        ReactiveFormsModule,
        NzMessageModule,
        NzModalModule,
        NzDividerModule,
        NzGridModule,
        NzCardModule
    ],
    providers: [ { provide: NZ_I18N, useValue: en_US } ]
})
export class MaterialModule { }