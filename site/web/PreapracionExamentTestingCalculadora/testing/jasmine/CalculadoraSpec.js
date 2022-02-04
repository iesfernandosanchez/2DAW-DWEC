describe("Calculadora", function() {
    
    var calculadora;
    var a = 8;
    var b = 4;
    
    beforeEach(function() {
        calculadora = new Calculadora();
    });
    
    it("debería sumar dos números", function() {
        
        expect(calculadora.suma(a, b)).toEqual(a+b);
        
    });
    
    it("debería restar dos números", function() {
        
        expect(calculadora.resta(a, b)).toEqual(a-b);
        
    });
        
    it("debería multiplicar dos números", function() {
        
        expect(calculadora.multiplicacion(a, b)).toEqual(a*b);
        
    });
        
    it("debería dividir dos números", function() {
        
        expect(calculadora.division(a, b)).toEqual(a/b);
        
    });
});
