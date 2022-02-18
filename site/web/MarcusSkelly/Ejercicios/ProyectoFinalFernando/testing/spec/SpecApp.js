describe("App",function(){

    var app;


    it('crea un libro',() =>{

        var nombreBiblioteca = 'Biblioteca Moratalaz';
        app.addBiblioteca(nombreBiblioteca);
        var biblioteca = app.getBiblioteca(nombreBiblioteca)

        
        var libro = new Libro(biblioteca,'Historia de españa','prestado','sala central');
        biblioteca.addLibro(libro);
        expect(app.bibliotecas.length).toBe(1)
        expect(biblioteca.libros.length).toBe(1)
    });

    it('crea una biblioteca',() =>{
        app.addBiblioteca('Biblioteca Moratalaz');
        expect(app.bibliotecas.length).toBe(1)
    })

});