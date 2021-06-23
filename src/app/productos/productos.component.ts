import { Component, OnInit } from '@angular/core';
import {Ng2IzitoastService} from "ng2-izitoast";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  productos = [];
  mostrarFormulario = false;
  total: number =0;
  subtotal: number = 0;
  iva: number;

  constructor(public iziToast: Ng2IzitoastService) { 
    
  }

  ngOnInit(): void {

  }

  receptor($event: any) {  
    this.productos = $event; 

    for(let i=0;i<this.productos.length;i++){
      console.log("prod c :"+this.productos[i].cantidad);
      console.log("prod p :"+this.productos[i].precio);


      this.subtotal= this.subtotal+this.productos[i].cantidad*this.productos[i].precio;
    }
    this.iva= this.subtotal*0.19;
    this.total= this.subtotal+this.iva;
    
    console.log("iva "+this.iva);
    console.log("t "+this.total);
    
    this.mostrarFormulario = false;
    this.iziToast.success({ 
      title: "Producto Agregado",
      position:"topCenter",
      
    });
  } 

  nuevoItem(){
    this.mostrarFormulario = true;
  }
  cancelar(){
    this.mostrarFormulario = false;
  }

}
