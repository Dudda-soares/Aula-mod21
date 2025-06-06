AOS.init();
const dataDoEvento = new Date("Jul 10, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diasEmMs = 86400000;
    const horaEmMS = 3600000;
    const minEmMs = 60000;
    const diasAteEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horaEvento = Math.floor(distanciaAteOEvento % diasEmMs / horaEmMS);
    const minEvento = Math.floor(distanciaAteOEvento % horaEmMS / minEmMs);
    const segEvento = Math.floor(distanciaAteOEvento % minEmMs / 1000);
    /*console.log(diasAteEvento);
    console.log(horaEvento);
    console.log(minEvento);
    console.log(segEvento);*/ const constador = document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horaEvento}h ${minEvento}m ${segEvento}s`;
    console.log(constador);
    if (distanciaAteOEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = `Evento indisponivel`;
    }
}, 1000);

//# sourceMappingURL=Aula-mod21.f75de5e1.js.map
