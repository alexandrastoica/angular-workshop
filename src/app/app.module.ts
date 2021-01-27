import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '../app/material.module';
import { HomeComponent } from '../app/home/home.component';
import { CoursesComponent } from '../app/courses/courses.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
