const respostasCorretas = [
    "falso",
    "microsoft",
    "(-b ± √(b² - 4ac)) / 2a",
    "duke",
    "1995",
    "b3",
    "sequencia_de_passos",
    "valor_armazenado",
    "oracle",
    "pycharm"
];

let respostasUsuario = [];
let tempoRestante = 3600;
let timerInterval;

function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
}

function iniciarProva() {
    const tempoDisplay = document.getElementById('tempo-restante');
    tempoDisplay.textContent = formatarTempo(tempoRestante);

    timerInterval = setInterval(function() {
        tempoRestante--;
        tempoDisplay.textContent = formatarTempo(tempoRestante);

        if (tempoRestante <= 0) {
            finalizarProva();
        }
    }, 1000);
}

function mostrarProximaQuestao(questaoAtual) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (name === '' || email === '') {
        alert('Por favor, preencha seu nome e email antes de avançar.');
        return;
    }

    const currentQuestion = document.getElementById(`q${questaoAtual}`);
    const nextQuestion = document.getElementById(`q${questaoAtual + 1}`);
    const currentRadio = currentQuestion.querySelector('input[type="radio"]:checked');

    if (currentRadio) {
        respostasUsuario[questaoAtual - 1] = currentRadio.value;
        currentQuestion.style.display = 'none';

        if (nextQuestion) {
            nextQuestion.style.display = 'block';
        } else {
            finalizarProva();
        }
    } else {
        alert('Por favor, selecione uma resposta antes de avançar.');
    }
}

function finalizarProva() {
    clearInterval(timerInterval);

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (name === '' || email === '') {
        alert('Por favor, preencha seu nome e email antes de enviar.');
        return;
    }

    let acertos = 0;
    for (let i = 0; i < respostasCorretas.length; i++) {
        if (respostasUsuario[i] === respostasCorretas[i]) {
            acertos++;
        }
    }

    if (acertos === respostasCorretas.length) {
        alert(`Parabéns ${name}! Você gabaritou a prova.`);
    } else if (acertos > 0) {
        alert(`${name}, você acertou ${acertos} de ${respostasCorretas.length} questões.`);
    } else {
        alert(`Que pena, ${name}. Tente novamente. Você não acertou nenhuma questão.`);
    }

    location.reload();
}

document.addEventListener('DOMContentLoaded', function() {
    iniciarProva();
});
