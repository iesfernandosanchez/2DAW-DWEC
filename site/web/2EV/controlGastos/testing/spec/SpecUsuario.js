describe("Usuario", function() {
  var usuario;
  


  

  it('it create user',() => {
    var randomName = faker.name.findName();
    var randomDescription = faker.lorem.paragraph();
    
    usuario = new Usuario(randomName,randomDescription);
    expect(usuario.nombre).toBe(randomName);
    expect(usuario.descripcion).toBe(randomDescription);
  })    
})