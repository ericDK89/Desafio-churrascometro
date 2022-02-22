// Carne - 400 gr por pessoa + de 6 horas - 650
//Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
//Refrigerante/agua - 1000 ml por pessoa + 6 horas - 1500 ml

//Crianças valem por 0,5

window.onload = function() {

    let inputAdultos = document.getElementById("adultos")
    let inputCriancas = document.getElementById("criancas")
    let inputDuracao = document.getElementById("duracao")

    let resultado = document.getElementById("resultado");


    calcular = function() {
        console.log("Calculando...")

        let qtdAdultos = inputAdultos.value;
        let qtdCriancas = inputCriancas.value;

        let qtdTotalCarne = carnePP * qtdAdultos + (carnePP / 2 * qtdCriancas);

        console.log(qtdTotalCarne);

    }

    function carnePP(duracao) {
        if (duracao >= 6) {
            return 650;
        } else {
            return 400;
        }

    }

}