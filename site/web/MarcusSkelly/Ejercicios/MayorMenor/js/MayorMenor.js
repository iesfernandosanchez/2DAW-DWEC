        var arrayInput = new Array();
        var contador = 0;
        var total = 0;
        var numMayor = 0;
        var numMenor = 0;
        

        function meterNumeros(){
            var inputText = document.getElementById('texto').value;

            arrayInput.push(parseInt(inputText));

            var pText = "";

            for(i=0; i < arrayInput.length;i++){
                pText = pText + arrayInput[i];
            }

            document.getElementById('pText').innerHTML = pText;

            document.getElementById('texto').value = ""; //limpia input
        }

        

        function calcula(){
            
            var numMayor = 0;
            var numMenor = 0;

            for(i=0;i<arrayInput.length;i++){

                
                total = total + parseInt(arrayInput[i]);
                if(numMayor < parseInt(arrayInput[i])){
                    numMayor = parseInt(arrayInput[i]);
                }else if(numMenor > parseInt(arrayInput[i])){
                    numMenor = parseInt(arrayInput[i]);
                }

            }

            var avg = total/arrayInput.length;

            document.getElementById('resultadoSuma').innerHTML = parseInt(total);
            document.getElementById('resultadoMedia').innerHTML = parseInt(avg);
            document.getElementById('resultadoMayor').innerHTML = numMayor;
            document.getElementById('resultadoMenor').innerHTML = numMenor;
            document.getElementById('pText').innerHTML = "";
        }

        function reiniciar(){

            document.getElementById('resultadoSuma').innerHTML = "";
            document.getElementById('resultadoMayor').innerHTML = "";
            document.getElementById('resultadoMenor').innerHTML = "";
            document.getElementById('resultadoMedia').innerHTML = "";
            document.getElementById('pText').innerHTML = "";
            arrayInput.length = 0;
            
        }