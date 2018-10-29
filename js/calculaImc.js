var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutrição Aparecida";

var paciente = document.querySelectorAll(".paciente");

for(var i=0; i < paciente.length; i++){
	var tdPeso = paciente[i].querySelector(".info-peso");
	var tdAltura = paciente[i].querySelector(".info-altura");

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;

	var tdImc = paciente[i].querySelector(".info-imc");

	var alturaEhValida = validaAltura(altura);
	var pesoEhValido = validaPeso(peso);

	if (!pesoEhValido) {
	    console.log("Peso inválido!");
	    tdPeso.textContent = "Peso inválido! " + "("+peso+")";
	}

	if (!alturaEhValida) {
	    console.log("Altura inválida!");
	    tdAltura.textContent = "Altura inválida! " + "("+altura+")";
	}

	if (alturaEhValida && pesoEhValido) {
	    tdImc.textContent = calculaImc(peso, altura);    
	} else {
	    tdImc.textContent = "Altura e/ou peso inválidos!"
	    paciente[i].classList.add("paciente-invalido");
	}
}

function calculaImc(peso, altura){
	var imc = peso/(altura*altura);
	return imc.toFixed(2);
}

function validaPeso(peso){
	if((peso <= 0  || peso >= 1000) || peso.length == 0){
		return false;
	}else{
		return true;
	}
}

function validaAltura(altura){
	if((altura <= 0 || altura >= 3) || altura.length == 0){
		return false;
	}else{
		return true;
	}
}

function validaNome(nome) {
	if (nome.length < 4) {
		return false;
	}else{
		return true;
	}
}

function validaGordura(gordura){
	if (gordura.length == 0) {
		return false;
	}else{
		return true;
	}
}