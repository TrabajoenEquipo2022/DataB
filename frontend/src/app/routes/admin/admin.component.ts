import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/routes/services/datos.service';
import { NgForm } from '@angular/forms';
import { Datos } from 'src/app/models/datos.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public datosService: DatosService) { }

  ngOnInit(): void {
    this.getDatos()
  }
 
  getDatos(){
  
   let response = this.datosService.getDatos()

  // traduce el observable, hay que suscribirse
   response.subscribe((res: any) => {
   this.datosService.datos = res.data 
   console.log(this.datosService.datos)
   })
  }



  orderByPrice(){
    let datos = this.datosService.datos || []
    let sortedDatos;
    if(datos|| datos.lenght > 0){

      //para organizar de menor a mayor
      sortedDatos= datos.sort((a: any, b: any) => (a.price > b.price) ? 1 : -1)
      this.datosService.datos = sortedDatos
      return;
}
    return;
  }

  createDatos(form: NgForm){
    console.log(form.value)

    if (form.value._id){
      this.updateDatos(form.value)
      return
    }

    delete form.value._id // null elimina el id

    //deconstruir el objeto
    let { name, stock } = form.value

    if(!name || !stock)
    return alert("Por favor diligencie todos los campos")
    
    this.datosService.createDatos(form.value).subscribe((res: any) => {
      this.getDatos() // para actualizar la tabla
      alert(res.msg);
      this.datosService.currentDatos = new Datos()
    })
  }

  deleteDatos(id: string, name: string)
  {

    let isDeleted = confirm (`Esta seguro que desea eliminar los datos"${name}"`);

    if (isDeleted){

    this.datosService.deleteDatos(id).subscribe((res: any) =>{
      this.getDatos();
      alert(res.msg || 'error');
    });
    return;
    }
    return;
    }

    updateDatos(data:Datos){
      this.datosService.updateDatos(data._id, data).subscribe((res) => {
        alert("hola")
        this.getDatos()
        this.datosService.currentDatos
      })
    }

    fillForm(datos: Datos){
    this.datosService.currentDatos =datos
}
}