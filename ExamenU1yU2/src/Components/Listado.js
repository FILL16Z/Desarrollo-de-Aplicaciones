import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = (props) => {
  return ( 
    <div className="Listado">
      <h1>Mi Carrito</h1>
    {
                
        props.lista.length===0   
        ? <p>No hay productos</p>
        : 
    
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
          props.lista.map((a,index)=>
            <tr key={index}>
                <td>{a.codigo}</td>
                <td>{a.descripcion}</td>
                <td>${a.precio}</td>
                <td><Button onClick={()=>props.eliminar(a,index)}variant="danger">eliminar</Button></td>                
            </tr>
          )
        }
          </tbody>
        </Table>
      }

      </div>
 );
}
 
export default Listado;