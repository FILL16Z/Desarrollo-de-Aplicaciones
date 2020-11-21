import './App.css';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Listado from './Components/Listado';
import Productos from './Components/Productos';

class App extends Component {

   constructor() {
    super();
    this.state = {
      carrito:[],
      total:0,
      productosLista:[
        {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899},
        {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999},
        {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850},
        {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949},
        {codigo:5,descripcion:"Mochila Xiaomi", precio:699},
        {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999},
      ],
    };
  }



  enviar=(objeto)=>{

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado',
      showConfirmButton: false,
      timer: 4500
    })

    this.setState({
      carrito:[...this.state.carrito,objeto]
    })
}

//funcion alterna para enviar, no compatible con la funciona de elimiar :c 
  /*  enviar=(a, b, c)=>{
    console.log(a + b + c)

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado',
      showConfirmButton: false,
      timer: 4500
    })

    this.setState({
      ...this.state,
      carrito: [... this.state.carrito, { codigo: a, descripcion: b, precio: c}]

    })
  } */


  eliminar=(a,index)=>{

    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Producto eliminado',
      showConfirmButton: false,
      timer: 4500
    })

    const temporal = this.state.carrito.filter((a,i)=>i!==index)

    this.setState({
      carrito:temporal
    })
}

  render() {
    
    return (
      <div className="App">
        <Header/>
        <div className="Containers">
          <Productos
            enviar={this.enviar}
            ProductosLista={this.state.productosLista}
          />
          <Listado
            eliminar={this.eliminar}
            lista={this.state.carrito}
          />          
        </div>
      </div>
    )
  }
}

export default App;
