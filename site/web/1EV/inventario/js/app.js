class App{

	constructor(){
		this.shop = new Shop();
	}
	
	finishLoading() {
		console.log("finishLoading");
		this.showButtons();
		this.showPage();
	}

	startLoading() {

		console.log("startLoading");
		this.hideButtons();
		this.hidePage();
	}

	hidePage() {
		document.getElementById("loader").style.display = "block";
		document.getElementById("myContent").style.display = "none";
	}

	showPage() {
		document.getElementById("loader").style.display = "none";
		document.getElementById("myContent").style.display = "block";
	}

	

	showButtons(){
		document.getElementById("buttons").style.display = "block";
	}

	hideButtons(){
		document.getElementById("buttons").style.display = "none";
	}

	loadContent(functionName){
		this.startLoading()
		functionName;
		setTimeout(function(){app.finishLoading()},1000);
	}

	showProducts(){
		this.loadContent(this.shop.showProducts())
	}

	newProduct(){
		this.loadContent(this.shop.newProduct(document.getElementById("myContent")));
	}
}