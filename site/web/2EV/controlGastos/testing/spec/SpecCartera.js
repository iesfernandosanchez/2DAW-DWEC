describe("Cartera", function() {
    var usuario;
    
  
  
    
  
    it('it create it add new gasto to cartera and create new usuario if necesary',() => {

        var gasto = {
            "nombre":"pepe",
            "fecha":"21/02/2022",
            "importe":"67.4", 
            "concepto":"cena"
        };
      
      var cartera = new Cartera("carteraPruebas");
      cartera.addGasto(gasto);

      expect(cartera.usuarios.length).toBe(1);
      expect(cartera.gastos.length).toBe(1);
    })    
  })