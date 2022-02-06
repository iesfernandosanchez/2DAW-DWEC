describe("App", function() {
  var app;
  
  beforeEach(function() {
    app = new App();
    
  });

  /*
  it('it create players',() => {
    let numPlayers = 5;
    app.crearJugadores(numPlayers);
    expect(app.jugadores.length).toBe(numPlayers)
  })  
  */

  it('it create cards',() => {
    
    app.crearBaraja(configBaraja);
    expect(app.baraja.length).toBe(configBaraja.length)
  })  

  it('generate new cards',() => {
    alert(faker.animal.type());
  }) 
})