import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewHomepageComponent } from './new-homepage/new-homepage.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { TablePartComponent } from './table-part/table-part.component';
@NgModule({
  declarations: [
    AppComponent,
    NewHomepageComponent,
    TablePartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatInputModule, BrowserAnimationsModule,MatButtonModule,MatIconModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
