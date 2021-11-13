function esPar(a){
    if (a%2==0){
        document.write('True');

    }else{
        document.write('False');
    }
}

function main(){
    var num = document.getElementById("recogida").value;
    var split = num.split(";")

    resultadoSumaPares(split);
    resultadoSumaImpares(split);
    
}



function resultadoSumaPares(array) {
    
    var suma = 0;
    for (let i = 0; i < array.length; i++) {
          if(array[i] % 2 == 0){
            suma = parseInt(array[i]) + suma;   
          }     
    }
    
    document.getElementById('resultadoSumaPares').innerHTML = suma;

  }

  function resultadoSumaImpares(array) {
    
    var suma = 0;
    for (let i = 0; i < array.length; i++) {
          if(array[i] % 2 != 0){
            suma = parseInt(array[i]) + suma;   
          }     
    }
    
    document.getElementById('resultadoSumaImpares').innerHTML = suma;

  }
