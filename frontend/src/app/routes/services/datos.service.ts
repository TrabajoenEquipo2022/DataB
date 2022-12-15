import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datos } from '../../models/datos.model';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  //url para consumir todos los productos 
  URL_API = 'http://localhost:5000/datos'

  //atributo

  datos: any 
  currentDatos: Datos // se crea para poder registrar los nuevo usuarios, que se inicialice en un nuvo producto

  constructor(public http:HttpClient) {
    this.currentDatos = new Datos()
   }

  getDatos(){
    return this.http.get(`${this.URL_API}/get-datos`)
  }

  //metodo de crear producto 
  createDatos(data: any){
    return this.http.post(`${this.URL_API}/create-datos`, data)
  }
  
   deleteDatos(id: string){
    return this.http.delete(`${this.URL_API}/delete-datos?id=${id}`)
  }

  updateDatos(id: string, data: any){
  return this.http.put(`${this.URL_API}/update-datos?id=${id}`, data)
}
}
