var botao = document.querySelector("#busca-ajax");

botao.addEventListener("click", function(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
	xhr.addEventListener("load", function(){
		if (xhr.status == 200) {
			var resposta = xhr.responseText;
			var pacientes = JSON.parse(resposta);
			pacientes.forEach(function(paciente){
				adicionaPaciente(paciente);
			});
		}else{
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
		
	});
	xhr.send();
});