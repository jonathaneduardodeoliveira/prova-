window.onload = function() {
    function mostrarTempoRestante() {
        var agora = new Date();
        var tempoRestante = dataFinal - agora;
        var segundosRestantes = Math.floor((tempoRestante % (1000 * 60)) / 1000);
        var minutosRestantes = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        var horasRestantes = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        var tempoFormatado = horasRestantes + "h " + minutosRestantes + "min " + segundosRestantes + "s";
        
        document.getElementById("tempo-restante").innerText = "Tempo restante da prova: " + tempoFormatado;
    }

    var dataFinal = new Date();
    dataFinal.setHours(dataFinal.getHours() + 2);

    mostrarTempoRestante();

    setInterval(mostrarTempoRestante, 1000);
};
