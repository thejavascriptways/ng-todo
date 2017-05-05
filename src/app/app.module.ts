import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HowToComponent } from './how-to/how-to.component';
import { ExamplesComponent } from './examples/examples.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HowToComponent,
    ExamplesComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
