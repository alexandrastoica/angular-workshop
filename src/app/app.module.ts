import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '../app/material.module';
import { HomeComponent } from '../app/home/home.component';
import { CoursesComponent } from '../app/courses/courses.component';
import { FormsModule } from '@angular/forms';
import { LessonsService } from './shared/services/lessons.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
  ],
  providers: [
    CoursesComponent,
    LessonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
