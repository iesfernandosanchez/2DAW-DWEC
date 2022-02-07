
  
describe("Calculadora", function() {
  var calculadora;
  var a = -1;
  var b = -1;
  

  beforeEach(function() {
    calculadora = new Calculadora();
  });

  it("debería sumar dos numeros", function() {
    
    expect(calculadora.suma(a,b)).toEqual(a+b);

  });

  it("debería dividir dos numeros", function() {
    
    expect(calculadora.division(a,b)).toEqual(a/b);

  });

});
