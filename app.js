


(function(){

// boton generador 
document.querySelector("#generar").addEventListener("click", requestApi)
    
    
    
function requestApi(){

  



    const valor = document.querySelector("#select")

    // leemos el valor del select
    const valorSeleccionado = valor.options[valor.selectedIndex].value;

    console.log(valorSeleccionado)

//   //  recortamos url de la api y concatenamos segun value del select 
   let url = "https://dog.ceo/api/breed"


   if(valorSeleccionado === "husky" ){
            
    url+=`/husky/images/random`

}if(valorSeleccionado === "labrador"){
    
    url+=`/labrador/images/random`
    
}if(valorSeleccionado === "germanshepherd"){
    
    url+=`/germanshepherd/images/random`
    
}if(valorSeleccionado === "poodle"){
    
    url+=`/poodle/images/random`

}if(valorSeleccionado === "retriever"){
    
    url+=`/retriever/images/random`
    
}if(valorSeleccionado === "bulldog"){
    
    url+=`/bulldog/images/random`
}if(valorSeleccionado === "chihuahua"){
    
    url+=`/chihuahua/images/random`
}if(valorSeleccionado === "dalmatian"){
    
    url+=`/dalmatian/images/random`
}if(valorSeleccionado === "doberman"){
    
    url+=`/doberman/images/random`
    
}if(valorSeleccionado === "malamute"){
    
    url+=`/malamute/images/random`
}if(valorSeleccionado === "maltese"){

    url+=`/maltese/images/random`

}if(valorSeleccionado === "pitbull"){
    
    url+=`/pitbull/images/random`
    
}if(valorSeleccionado === "rottweiler"){
    
    url+=`/rottweiler/images/random`
    
}if(valorSeleccionado === "pug"){
    
    url+=`/pug/images/random`
}

  fetch(url)
  
  .then(res =>  res.json())


  .then(function(data){

    // creamos tamplete
    let html = `
    <img class="imgs img-fluid" src="${data.message}" style="width: 400px; height: 400px;" alt="">        
    
    
    `
    //  lo inyectamos en el html
    document.querySelector(".contenido").innerHTML = html 
    
    })

}





}())

    

    
         
      
    
        
    









