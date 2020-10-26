function Leer() {
    const ciudad = document.getElementById("input").value;
    const key='4b6fb51ef7ac7f8466ea69b1ad2fa19b';
    const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric`
    mostrarClima(api_url);
}

const mostrarClima=async(api_url)=>{

    const data= await fetch(api_url);
    const respuesta= await data.json();

    console.log(respuesta.sys); 
    if(respuesta!=null)
    {   
        console.log(respuesta.weather);

        respuesta.weather.map((p)=>{})
        document.getElementById("tempciudad").innerHTML=`${respuesta.name}`
        document.getElementById("tempactual").innerHTML=`Temperatura Actual : ${respuesta.main.temp} ° С`
        document.getElementById("tempmax").innerHTML=`Maxima: ${respuesta.main.temp_max} ° С`
        document.getElementById("tempmin").innerHTML=`Minima: ${respuesta.main.temp_min} ° С`
    }
    
  }
