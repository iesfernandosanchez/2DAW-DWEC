const $btnAbrir = document.querySelector("#btnAbrir");
  
  let ventana;
  $btnAbrir.addEventListener("click", () => {
    ventana = window.open("ListadoHija.html","","height=400,width=800");;
  });
  
  
  // Llamada desde la hija
  function establecerMensaje(input) {
    $mensajeRecibido.textContent = mensaje;
  }


  function marcar (input){
    if (input === "Tomates"){

      checks = document.querySelector('#Tomates');
      checks.checked = true
  
  }else if(input === "Cebollas"){
  
      checks = document.querySelector('#Cebollas');
      checks.checked = true
  
  }else if(input === "Ajos"){
  
      checks = document.querySelector('#Ajos');
      checks.checked = true
  }
  }