import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
// import { InputComponent } from './home/input/input.component';
// import { ShowComComponent } from './show-com/show-com.component';
// import { TableShowComponent } from './home/table-show/table-show.component';

@NgModule({
  declarations: [
    AppComponent,
    // InputComponent,
    // ShowComComponent,
    // TableShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
