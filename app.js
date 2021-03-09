
(function (){




    // boton generador 
    document.querySelector("#generar").addEventListener("click", requestApi)
    
    
    
    function requestApi(){
    
      
    
        const xhr = new XMLHttpRequest()
    
    
        const valor = document.querySelector("#select")
    
        // leemos el valor del select
        const valorSeleccionado = valor.options[valor.selectedIndex].value;
    
        console.log(valorSeleccionado)
    
      //  recortamos url de la api y concatenamos segun value del select 
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
    
        xhr.open("GET", url, true)
    
    
        xhr.onload = function(){
    
    
          if(this.status === 200  ){
    
            
    
            const data = JSON.parse(this.responseText)
            console.log(data)
    
            
            let html = `
            <img class="imgs img-fluid" src="${data.message}" style="width: 400px; height: 400px;" alt="">        
            
            `
          
            document.querySelector(".contenido").innerHTML = html
    
          }  
    
    
        }
      
    
        xhr.send()
    }





}())



