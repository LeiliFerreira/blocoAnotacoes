function salvar() {
	localStorage.info = document.getElementById("texto").value; 
	if (localStorage.info == "") { 
		alert("Escreva ou cole um texto para salvar!"); 
	} else {
		alert("Salvo com sucesso!"); 
	}
}

function carregar() {
	document.getElementById("texto").value = localStorage.info; 
}