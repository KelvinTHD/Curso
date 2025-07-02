const form = document.getElementById('formularioCurso');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const curso = document.getElementById('cursoSelecionado');
const mensagemErro = document.getElementById('mensagemErro');

form.addEventListener('submit', function(event) {
    mensagemErro.textContent = '';
    let validado = true;

    if (nome.value.trim().length < 3) {
        mensagemErro.textContent = 'O nome deve ter pelo menos 3 letras.';
        validado = false;
    } else if (!email.value.includes('@') || !email.value.includes('.')) {
        mensagemErro.textContent = 'E-mail inválido.';
        validado = false;
    } else if (curso.value === '') {
        mensagemErro.textContent = 'Selecione um curso.';
        validado = false;
    }

    if (!validado) {
        event.preventDefault();
        return;
    }

    alert("Inscrição realizada com sucesso!");
});

// Modo acessível
const botaoAcessibilidade = document.getElementById('btnAcessibilidade');

botaoAcessibilidade.addEventListener('click', () => {
    document.body.classList.toggle('acessivel');
});
