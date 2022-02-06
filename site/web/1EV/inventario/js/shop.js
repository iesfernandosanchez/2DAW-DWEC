class Shop{
	constructor( products ){
		this.defaultImageProduct = "default-image_450.png";
		this.products = products
	}

	createTableProducts(){

		let content = document.getElementById("myContent");
		content.innerHTML ="<main>"+
					"<div class='row g-12'>"+
			            "<table class='table' id='products-datatable'>"+
			                "<thead><tr><td>Image</td><td>Name</td><td>Price</td><td>Quantity</td></tr></thead>"+
    						"<tbody id='products-datatable-data'></tbody>"+
						"</table>"+
			        "</div>"+
			        "</main>";
	}

	showProducts(){
		this.createTableProducts();
		var datatableProducts = document.getElementById("products-datatable-data");
		for (var i = 0; i < products.length; i++) {
			var rowDatatable = "<tr>";
			if(products[i].image == undefined){
				rowDatatable += "<td><img class='img-thumbnail' src='img/"+this.defaultImageProduct+"'/></td>";
			}else{
				rowDatatable += "<td><img class='img-thumbnail' src='img/"+products[i].image+"'/></td>";
			}

			rowDatatable += "<td>"+products[i].name+"</td>"+
			"<td>"+products[i].price+"</td>"+
			"<td><input type='number' name='quantity-product-"+products[i].name+"' maxlength='3' min='0' max='999' value='0'/></td>"+
			"</tr>";

			datatableProducts.innerHTML += rowDatatable;
		}
		$('#products-datatable').DataTable();
	}

	newProduct(tagElement){
		let content = "<h1>Nuevo Producto</h1>";
		content+="<hr/><button onClick='app.showProducts()'>Volver al listado de productos</button>";


		tagElement.innerHTML = content;
	}
}