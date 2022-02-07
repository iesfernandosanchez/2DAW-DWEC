describe("Gasto", function() {
    
    var gasto;
    var usuario = 8;
    var fecha = 4;
    var importe = 6;
    var concepto = "Prueba"
    
    beforeEach(function() {
        gasto = new Gasto(usuario, fecha, importe, concepto);
    });
    
    it("deberían ser iguales", function() {
        
        expect(new Gasto(usuario, fecha, importe, concepto)).toEqual(gasto);

        //expect(new Gasto(usuario, fecha, importe, concepto)).toBe(gasto);
        
    });
});
