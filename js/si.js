function cambio(){
  document.getElementById("img").src='img/si2.jpg';
  img.style.width="350px";
  img.style.height="300px";
  img.style.animation="none";
  document.getElementById("modal");
  modal.style.width="300px";
  modal.style.height="250px";
  modal.style.background="rgba(66,64,63)";
  modal.style.position="absolute";
  modal.style.top="40px";
  modal.style.right="0";
  modal.style.left="0";
  modal.style.bottom="1";
  modal.style.margin="auto";
  modal.style.borderRadius="10px";
    
  modal.innerHTML = "<a href='index.html'><input type='submit' value='X' id='btnCerrar'></a><h1 id='cabecera'>Feliz año nuevo</h1><br/><a href='video.html'><input type='submit' value='Ver Video' id='btn'><a>";
  document.getElementById("cabecera").style.color="white";
  cabecera.style.textAlign="center";
  cabecera.style.marginTop="80px";
  cabecera.style.fontFamily="Lobster";
  cabecera.style.fontSize="40px";
  cabecera.style.fontWeight="100";
    
  document.getElementById("btn").style.width="200px";
  btn.style.marginLeft="50px";
  btn.style.marginTop="20px";
  btn.style.height="50px";
  btn.style.fontSize="20px";
  btn.style.fontFamily="Lobster";
    
 document.getElementById("btnCerrar").style.width="30px";
 btnCerrar.style.position="absolute";
 btnCerrar.style.left="2";
 btnCerrar.style.right="5px";
 btnCerrar.style.top="6px";
 btnCerrar.style.background="rgba(66,64,63)";
 btnCerrar.style.border="none";
 btnCerrar.style.color="White";
 btnCerrar.style.fontSize="20px";
}