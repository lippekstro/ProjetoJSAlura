var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", function(event){
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");

	var paciente = extraiInfos(form);

	var erros = validaPaciente(paciente);

	if (erros.length > 0) {
		exibeErro(erros);
		return;
	}

	adicionaPaciente(paciente);
	
	form.reset();
	var mensagens = document.querySelector("#mensagens-erro");
	mensagens.innerHTML = "";
	

});

function adicionaPaciente(paciente){
	var pacienteTr = criaElementoTabela(paciente);	
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

function extraiInfos(form){
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function criaElementoTabela(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTds(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTds(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTds(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTds(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTds(paciente.imc, "info-imc"));

	return pacienteTr;

}

function montaTds(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente){
	
	var erros = [];

	if (!validaNome(paciente.nome)) {
		erros.push("Nome invalido")
	}
	if (!validaPeso(paciente.peso)) {
		erros.push("Peso é invalido");
	}
	if (!validaAltura(paciente.altura)) {
		erros.push("Altura é invalida");
	}
	if (!validaGordura(paciente.gordura)) {
		erros.push("Percentual de Gordura invalido");
	}

	return erros;
}

function exibeErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}