import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from './app.component';
import { KhachhangsComponent } from './khachhangs/khachhangs.component';
import { KhachhangComponent } from './khachhangs/khachhang/khachhang.component';
import { KhachhangListComponent } from './khachhangs/khachhang-list/khachhang-list.component';
import { ToastrModule } from "ngx-toastr";
import { AgGridModule } from "ag-grid-angular/main";
import { FilterPipe } from './khachhangs/khachhang-list/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KhachhangsComponent,
    KhachhangComponent,
    KhachhangListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule,
    AgGridModule.withComponents([
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
