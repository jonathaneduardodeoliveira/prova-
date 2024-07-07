document.addEventListener('DOMContentLoaded', function () {
    var perguntas = document.querySelectorAll('.question');
    perguntas.forEach(function (pergunta) {
        pergunta.style.display = 'none';
    });

    var primeiraPergunta = document.querySelector('.question:first-of-type');
    primeiraPergunta.style.display = 'block';

    var botoesProximo = document.querySelectorAll('a[href^="#q"]');
    botoesProximo.forEach(function (botao) {
        botao.addEventListener('click', function (event) {
            event.preventDefault();
            var perguntaAtual = this.parentElement;
            perguntaAtual.style.display = 'none';

            var proximaPerguntaId = this.getAttribute('href').substring(1);
            var proximaPergunta = document.getElementById(proximaPerguntaId);
            proximaPergunta.style.display = 'block';
        });
    });
});
