export class Datos {
  //atributos y sus tipos
  _id: string;
  date: string;
  name: string;
  valorunitario: string;
 cantidad: string;
  stock: string;
  estado: string;
  //keywords:

  //constructor instanciar o inicializar los atributos cuando tengan un valor
  constructor(
    _id = "",
    date = "",
    name = "",
    valorunitario = "",
    cantidad = "",
    stock = "",
    estado= "",

  ) {
    this._id = _id;
    this.date = date;
    this.name = name;
    this.valorunitario = valorunitario;
    this.cantidad = cantidad;
    this.stock = stock;
    this.estado = estado;
  }
}
