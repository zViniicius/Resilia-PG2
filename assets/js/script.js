// Func to Init AOS and Counters effect on page load

$(document).ready(() => {
	if ('AOS' in window) {
		AOS.init();
	}

	let numberBusiness = Number($('#numberBusiness').text());
	numberBusiness = 480;
	let numberBusinessInterval = setInterval(() => {
		numberBusiness += 1;
		$('#numberBusiness').text(`+${numberBusiness}`);
		if (numberBusiness >= 500) {
			clearInterval(numberBusinessInterval);
		}
	}, 80);
});

// Contato -----------
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
	card.addEventListener('click', (e) => {
		card.classList.toggle('flip');
	});
});

// Lista de espera ----------

document.getElementById('pesquisarCEP');

function pesquisarCEP() {
	// Obtendo o valor do campo de entrada de CEP
	var cep = document.getElementById('cep').value;

	// Verificando se o CEP é válido
	if (validarCEP(cep)) {
		// Fazendo a requisição à API de busca de CEP
		fetch('https://viacep.com.br/ws/' + cep + '/json/')
			//then recebe a resposta da requisição e a passa como parametro para a função
			.then((response) => response.json())
			//função preenche os campos do formulario com os dados da API
			.then((data) => preencherDados(data))
			//catch é uma função para quando há um erro de requisição, ele recebe o erro como parametro
			.catch(function (error) {
				console.error(error);
				document.getElementById('cepNaoEncontrado').style.display = 'block';
			});
	} else {
		swal.fire({
			title: 'CEP inválido',
			icon: 'error',
			text: 'teste',
			showConfirmButton: false,
			timer: 2000,
		});
	}
}

function validarCEP(cep) {
	// validar o CEP
	var validacep = /^[0-9]{8}$/;

	return validacep.test(cep);
}



function preencherDados(data) {
	// Preenchendo os campos com os dados retornados pela API
	document.getElementById('rua').value = data.logradouro;
	document.getElementById('cidade').value = data.localidade;
	document.getElementById('estado').value = data.uf;
}
// fecha modal
document.getElementById('modal-fechar');
function fecharModal() {
	document.getElementById('cepInvalido').style.display = 'none';
}

$('document').ready(function () {});
