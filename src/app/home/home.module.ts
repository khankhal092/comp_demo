import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InputComponent } from './input/input.component';
import { ShowComComponent } from './show-com/show-com.component';
import { TableShowComponent } from './table-show/table-show.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    InputComponent,
    ShowComComponent,
    TableShowComponent,
    HomeComponent
  ],
  imports: [
  ],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
