const $btnEnviar = document.querySelector("#btnEnviar"),
	$fruta = document.querySelector("#fruta")

$btnEnviar.addEventListener("click", () => {
	const fruta = $fruta.value;
	if (!fruta) {
		alert("Teclee una fruta");
	};

	if (window.opener) {
		window.opener.marcarCheckbox(fruta);
	}

});