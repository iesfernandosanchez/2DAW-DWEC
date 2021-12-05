
class App {

    constructor() {

		this.shop = new Shop();

        this.modal = new bootstrap.Modal(document.getElementById("imagenModal"), {keyboard: false});

	}

    inicio() {

        this.shop.printProductos();

        this.montarTabla();

    }

    montarTabla() {

        const productos = this.shop.getProductos()

        var $tbody = document.getElementById("tbody");

        while ($tbody.firstChild) {
            $tbody.removeChild($tbody.firstChild);
        }
        
        productos.forEach(value => {
            
            const $tr = document.createElement("tr");

            let $tdId = document.createElement("td");
            $tdId.textContent = value.id;
            $tr.appendChild($tdId);

            let $tdNombre = document.createElement("td");
            $tdNombre.textContent = value.nombre;
            $tr.appendChild($tdNombre);

            let $tdPrecio = document.createElement("td");
            $tdPrecio.textContent = value.precio;
            $tr.appendChild($tdPrecio);

            let $img = document.createElement("img");
            if (value.imagen != undefined) {
                $img.src = "img/"+value.imagen;
            } else {
                $img.src = "img/default.jpeg";
            };
            
            $img.width = 30;

            let $tdImg = document.createElement("td");
            $tdImg.appendChild($img);
            $tdImg.setAttribute('dataImg', value.imagen)
            $tdImg.addEventListener("click", () => {

                document.getElementById("nombreImagen").innerHTML = $tr.childNodes[1].textContent;
                document.getElementById("imagen").setAttribute('src', $tr.childNodes[3].firstChild.getAttribute("src"));

                this.modal.toggle();
            });
            $tr.appendChild($tdImg);

            let $number = document.createElement("input");
            $number.setAttribute('id', value.id);
            $number.type = "number";
            $number.size = 2;
            $number.min = 0;
            $number.max = 99;
            $number.addEventListener('change', (event) => {
                this.shop.actualizarCantidad(event.target.getAttribute('id'), event.target.value)
            })

            let $tdCantidad = document.createElement("td");
            $tdCantidad.appendChild($number);
            $tr.appendChild($tdCantidad);

            $tbody.appendChild($tr);
        });

        this.mostrarTabla();

    }

    mostrarTabla() {
        $('#listado').DataTable();
    }

    guardar() {
        var swError = false;

        var nombre = document.getElementById("addNombre");
        var precio = document.getElementById("addPrecio");
        var foto = document.getElementById("addFoto");

        if (!nombre.value) {
            swError = true;
            nombre.classList.add("is-invalid");
            document.getElementById("errNombre").innerHTML = 'Introduzca nombre';
        } else {
            nombre.classList.remove("is-invalid");
        }

        if (!precio.value) {
            swError = true;
            precio.classList.add("is-invalid");
            document.getElementById("errPrecio").innerHTML = 'Introduzca precio';
        } else {
            precio.classList.remove("is-invalid");
        }

        if (!swError) {
            app.addProducto(nombre.value, precio.value, foto.value)
            nombre.value = "";
            precio.value = "";
            foto.value = "";
            $("#addArticulo").modal("hide");
        }
        
    }

    addProducto(nombre, precio, foto) {
        
        this.shop.anadirProducto(nombre, precio, foto);

        this.montarTabla();

    }

    prepararPresupuesto() {

        const $tbodyPresupuesto = document.getElementById('tbodyPresupuesto');
        var total = 0;

        const productos = this.shop.prepararPresupuesto();

        while ($tbodyPresupuesto.firstChild) {
            $tbodyPresupuesto.removeChild($tbodyPresupuesto.firstChild);
        }
        
        productos.forEach(producto => {
            var $tr = document.createElement('tr');

            var $td = document.createElement('td');
            $td.textContent = producto.id;
            $tr.appendChild($td);

            var $td = document.createElement('td');
            $td.textContent = producto.nombre;
            $tr.appendChild($td);

            var $td = document.createElement('td');
            $td.textContent = producto.cantidad;
            $tr.appendChild($td);

            var $td = document.createElement('td');
            $td.textContent = producto.precio;
            $tr.appendChild($td);

            var $td = document.createElement('td');
            $td.className = 'text-end';
            $td.textContent = (producto.precio * producto.cantidad).toFixed(2);
            $tr.appendChild($td);

            total += producto.precio * producto.cantidad;

            $tbodyPresupuesto.appendChild($tr);
        });

        document.getElementById('totalPresupuesto').innerHTML = total.toFixed(2);
    }

}