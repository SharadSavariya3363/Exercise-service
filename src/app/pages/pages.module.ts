import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    DataEntryComponent,
    DataDisplayComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PageRoutingModule
  ]
})
export class PagesModule {
  constructor(){
    console.log('pagemodule loaded');
    
  }
  
 }
