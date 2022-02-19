describe("App", function() {
    var servicios;

    beforeEach(function () {
        servicios = new Servicios();

    });



    it('Deberia añadir una publicacion',() => {
        let publicacion = new Publicacion("PicaPiedra","Imagen.jpg","Comedia","1234")
        servicios.addPublicacion(publicacion)

        expect(servicios.biblioteca.inventario.length).toBe(1);
    })


    it('Deberia encontrar la publicacion por el titulo y actualizarla',() =>{
        let publicacion = new Publicacion("PicaPiedra","Imagen.jpg","Comedia","1234")
        servicios.addPublicacion(publicacion)

        publicacion = servicios.findByTitulo("PicaPiedra");
        publicacion.genero = "Accion";

        servicios.updatePublicacion(publicacion)

        expect(servicios.findByTitulo("PicaPiedra").genero).toBe("Accion")
    })

    it('Deberia encontrar la publicacion por isbn',() =>{
        let publicacion = new Publicacion("PicaPiedra","Imagen.jpg","Comedia","1234")
        servicios.addPublicacion(publicacion)

        publicacion = servicios.findByIsbn("1234")

        expect(publicacion.titulo).toBe("PicaPiedra")
    })


    it('Deberia encontrar la publicacion por genero',() =>{
        let publicacion = new Publicacion("PicaPiedra","Imagen.jpg","Comedia","1234")
        servicios.addPublicacion(publicacion)
        let publicaciones = servicios.findByGenero("Comedia")

        expect(publicaciones[0].titulo).toBe("PicaPiedra")
    })

    it('Deberia añadir un ejemplar y encontrar un ejemplar', () =>{
        let publicacion = new Publicacion("PicaPiedra","Imagen.jpg","Comedia","1234")
        servicios.addPublicacion(publicacion)
        let ejemplar = new Ejemplar("casa","Disponible")

        servicios.addEjemplar("1234",ejemplar)

        let ejemplares = servicios.getEjemplar("1234",ejemplar.ubicacion,ejemplar.estado)

        expect(ejemplares.length).toBe(1)
    })

    it('Deberia actualizar un ejemplar', () =>{
        let publicacion = new Publicacion("PicaPiedra","Imagen.jpg","Comedia","1234")
        servicios.addPublicacion(publicacion)
        publicacion = servicios.findByTitulo("PicaPiedra")

        let ejemplar = new Ejemplar("casa","Disponible")
        servicios.addEjemplar("1234",ejemplar)

        ejemplar = publicacion.ejemplares[0]
        ejemplar.estado = "Estropeado"

        servicios.updateEjemplar("1234",ejemplar)

        let publicacionF = servicios.findByTitulo("PicaPiedra")

        expect(publicacionF.ejemplares[0].estado).toBe("Estropeado")
    })

    it('Deberia eliminar un ejemplar',() =>{
        let publicacion = new Publicacion("PicaPiedra","Imagen.jpg","Comedia","1234")
        servicios.addPublicacion(publicacion)
        publicacion = servicios.findByTitulo("PicaPiedra")

        let ejemplar = new Ejemplar("casa","Disponible")
        servicios.addEjemplar("1234",ejemplar)

        ejemplar = publicacion.ejemplares[0]
        servicios.deleteEjemplar("1234",ejemplar)

        let publicacionF = servicios.findByTitulo("PicaPiedra")
        expect(publicacionF.ejemplares.length).toBe(0)
    })

    it('Deberia eliminar una publicacion',() =>{
        let publicacion = new Publicacion("PicaPiedra","Imagen.jpg","Comedia","1234")
        servicios.addPublicacion(publicacion)
        publicacion = servicios.findByTitulo("PicaPiedra")

        servicios.deletePublicacion(publicacion)

        expect(servicios.biblioteca.inventario.length).toBe(0)

    })

    it('Deberia generar nuevas publicaciones', () =>{
        servicios.generarDatos(5)

        expect(servicios.biblioteca.inventario.length).toBe(5)
    })

})