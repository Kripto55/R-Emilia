function msj(){
   document.getElementById("modal").style.width="350px";
   modal.style.position="absolute";
   modal.style.height="360px";
   modal.style.background="rgba(0,0,0,.9)";
   modal.style.Top="0px";
   modal.style.left="0";
   modal.style.right="0";
   modal.style.bottom="390px";
   modal.style.margin="auto";
   modal.style.borderRadius="10px";
   modal.innerHTML = "<a href='video.html'><input type='submit' value='X' id='cerrar'></a> <h1 id='titulo'>Para ti</h1><p id='parrafo'></p>";    
    
    
    //Aqui va lo del boton cerrar
    
    document.getElementById("cerrar").style.position="absolute";
    cerrar.style.left="1";
    cerrar.style.right="15px";
    cerrar.style.top ="10px";
    cerrar.style.color ="white";
    cerrar.style.border ="none";
    cerrar.style.background ="rgba(0,0,0,.9)";
    cerrar.style.fontSize ="15px";
    
    //Aqui va la parte del titulo de el modal
    
    document.getElementById("titulo").style.textAlign="center";
     titulo.style.color="white";
     titulo.style.marginTop="10px";
     titulo.style.fontFamily="Lobster";
     titulo.style.fontWeight="100";
    
    //Aqui va a ir el parrafo
    
    document.getElementById("parrafo");
    
    parrafo.innerHTML = "<p>Hola Emilia de seguro estas leyendo esto se que aun no es año nuevo pero me gusto compartir este 2019 contigo fuistes una gran persona y tambien una buena amiga bueno de seguro no sentistes lo mismo pero yo senti que teniamos una conexion pero ya no importa para mi solo bastaba un mensaje para estar feliz todo el dia, te agradezco esa felicidad que me distes estas pocas semanas espero que este 2020 encuentres a ese amor de verdad que no sea de un solo dia, que no sea celoso y cuando lop encuentres solo quiero que no llores nunca mas por alguien te deseo suerte y que sigas adelante T.K.M. </p>";
    
    parrafo.style.padding = "20px";   
    parrafo.style.color = "white";
    parrafo.style.overflow = "scroll";
}
