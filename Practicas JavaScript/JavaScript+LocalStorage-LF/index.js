function resetFields(){
    document.getElementById("Input1").value='';
    document.getElementById("Input2").value='';
    document.getElementById("Input3").value='';
    document.getElementById("Input4").value='selecciona';
    document.getElementById("Input5").value='';

}

function createR() {
    
    //Guardo los datos capturados usando el id de cada control
    var id = document.getElementById("Input1").value;
    var nombre = document.getElementById("Input2").value;
    var descripcion = document.getElementById("Input3").value;
    var tipo = document.getElementById("Input4").value;
    var precio = document.getElementById("Input5").value;

    //validaciones
    if (id.length > 0) {
        //creo un objeto que guarda los datos
        var producto = {
            id, //matricula:id
            nombre,
            descripcion,
            tipo,
            precio,
        }

        var lista_productos=JSON.parse(localStorage.getItem("Alumnos"));

        if(lista_productos==null)
        { 
            var lista_productos = [];
        }
        
        const existe = lista_productos.some(element=>element.id==id); 

        if(!existe||document.getElementById("Input1").disabled==true)
        {
            
            if(document.getElementById("Input1").disabled==true)
            {
                var lista_productos=lista_productos.filter(alumno=>alumno.id!=id);

            }
                
            lista_productos.push(producto);
            var temporal = lista_productos.sort((a,b) => a.id-b.id);
            localStorage.setItem("Alumnos", JSON.stringify(temporal));
            
            read();
            resetFields();
            swal("Listo!", "Porducto agregado correctamente", "success");

        }
        else
        {
            swal("Error", "Ya existe ese id de producto","warning");
        }

    } 
    else 
    {
        swal("Error", "Llena todos los campos","warning");
    }

    document.getElementById("Input1").disabled = false;
    
}

function read(){
    document.getElementById("Table1").innerHTML='';
    

    const lista_productos = JSON.parse(localStorage.getItem("Alumnos"));
    
     
    if(lista_productos)
    {
        lista_productos.forEach((producto)=>printRow(producto));
    }
}


function printRow(producto){
    
    if(producto!=null){
        var table = document.getElementById("Table1"); 

        //creamos un nuevo elemento en la tabla en la ultima posicion
        var row = table.insertRow(-1);

        //Insertamos cada una de las celdas/columnas del registro
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        
        //Agregamos la informacion a cada una de las columnas del registro
        cell1.innerHTML = producto.id;
        cell2.innerHTML = producto.nombre; 
        cell3.innerHTML = producto.descripcion;
        cell4.innerHTML = producto.tipo; 
        cell5.innerHTML = producto.precio; 
        cell6.innerHTML = `<button type="button" class="btn btn-danger" onClick="deleteR(${producto.id})">Eliminar</button>`;
        cell7.innerHTML = '<button type="button" class="btn btn-success" onClick="seekR('+producto.id+')">Modificar</button>';
    }
}

function deleteR(id){
    const lista_productos = JSON.parse(localStorage.getItem("Alumnos"));
    var temporal=lista_productos.filter(alumno=>alumno.id!=id);
    localStorage.setItem("Alumnos", JSON.stringify(temporal));

    if(temporal.length==0)
    { 
        localStorage.removeItem("Alumnos");
         
    }
    swal("Listo!", "Producto eliminado correctamente","success");
    read();
    
}

function seekR(id){

    const lista_alumnos = JSON.parse(localStorage.getItem("Alumnos"));
    var alumno=lista_alumnos.filter(alumno=>alumno.id==id);
    //console.log(alumno[0]);
    updateR(alumno[0]);
}

function updateR(alumno){
    if(alumno!=null)
    {
        document.getElementById("Input1").value=alumno.id;
        document.getElementById("Input1").disabled = true;
        document.getElementById("Input2").value=alumno.nombre;
        document.getElementById("Input3").value=alumno.descripcion;
        document.getElementById("Input4").value=alumno.tipo;
        document.getElementById("Input5").value=alumno.precio;
    }
}


//Para consulta de carrera
function readQ(){
    document.getElementById("Table2").innerHTML='';
    var c = document.getElementById("Input6").value;
  
    const lista_productos = JSON.parse(localStorage.getItem("Alumnos"));
    var ProductoC=lista_productos.filter(productos=>productos.tipo==c);
    if(ProductoC)
    {
        ProductoC.forEach((producto)=>printRowQ(producto));
    }
    //console.log(alumnosC)

}


function printRowQ(productos){

    var table = document.getElementById("Table2"); 
    
    //creamos un nuevo elemento en la tabla en la ultima posicion
    var row = table.insertRow(-1);

    //Insertamos cada una de las celdas/columnas del registro
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    
    //Agregamos la informacion a cada una de las columnas del registro
    cell1.innerHTML = productos.id;
    cell2.innerHTML = productos.nombre; 
    cell3.innerHTML = productos.descripcion;
    cell4.innerHTML = productos.tipo;
    cell5.innerHTML = productos.precio;
  
}