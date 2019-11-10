import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyZooComponent } from './my-zoo/my-zoo.component';
import { NewZooComponent } from './new-zoo/new-zoo.component';

@NgModule({
  declarations: [
    AppComponent,
    MyZooComponent,
    NewZooComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
