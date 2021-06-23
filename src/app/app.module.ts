import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { FormularioProductosComponent } from './productos/formulario-productos/formulario-productos.component';
import { Ng2IziToastModule } from 'ng2-izitoast';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    FormularioProductosComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2IziToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
