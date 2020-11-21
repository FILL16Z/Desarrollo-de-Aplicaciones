import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Productos = (props) => {
  return (
    <div className="Productos">
        <h1>Productos</h1>
        <Table striped bordered hover>
    <thead>
      <tr>
        <th>Codigo</th>
        <th>Descripcion</th>
        <th>Precio</th>
        <th>Acción</th> 
      </tr>
    </thead>
      <tbody>
    {
      props.ProductosLista.map((a,index)=>
        <tr key={index}>
            <td>{a.codigo}</td>
            <td>{a.descripcion}</td>
            <td>${a.precio}</td>
            <td><Button onClick={()=>props.enviar(a)}variant="success">Agregar</Button></td>
        </tr>
      )
    }
      </tbody>
    </Table>

  <h4>Total: $ {props.total}</h4>
    </div>
)

}

 
export default Productos;