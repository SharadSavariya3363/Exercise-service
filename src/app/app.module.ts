import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { HeaderComponent } from './layout/header/header.component';
import { AppRoutingModule } from './app-routing';


@NgModule({
  declarations: [
    AppComponent,
    DataEntryComponent,
    DataDisplayComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
