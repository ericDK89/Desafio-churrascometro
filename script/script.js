// Carne - 400 gr por pessoa + de 6 horas - 650
//Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
//Refrigerante/agua - 1000 ml por pessoa + 6 horas - 1500 ml

//Crianças valem por 0,5

window.onload = function() {

    // window.onload foi necessario para fazer os dados sairem de null

    let inputAdultos = document.getElementById("adultos")
    let inputCriancas = document.getElementById("criancas")
    let inputDuracao = document.getElementById("duracao")

    let resultado = document.getElementById("resultado");


    calcular = function() {
        console.log("Calculando...")

        let qtdAdultos = inputAdultos.value;
        let qtdCriancas = inputCriancas.value;
        let duracao = inputDuracao.value

        let qtdTotalCarne = carnePP(duracao) * qtdAdultos + (carnePP(duracao) / 2 * qtdCriancas);
        let qtdTotalCerveja = cervejaPP(duracao) * qtdAdultos;
        let qtdTotalRefriAgua = refriPP(duracao) * qtdAdultos + (carnePP(duracao) / 2 * qtdCriancas);

        resultado.innerHTML = `<p> ${qtdTotalCarne / 1000}kg de carne </p>`
        resultado.innerHTML += `<p> ${Math.ceil(qtdTotalCerveja / 355)} Latas de cerveja </p>`
        resultado.innerHTML += `<p> ${Math.ceil(qtdTotalRefriAgua / 2000)} Garrafas de refri e água </p>`

        console.log(qtdTotalCarne + "gr de carne", qtdTotalCerveja + "ml de cerveja", qtdTotalRefriAgua + "ml de refrigerante e agua");

    }

    // PP = Por pessoa

    function carnePP(duracao) {
        if (duracao >= 6) {
            return 650;
        } else {
            return 400;
        }

    }

    function cervejaPP(duracao) {
        if (duracao >= 6) {
            return 2000;
        } else {
            return 1200;
        }

    }

    function refriPP(duracao) {
        if (duracao >= 6) {
            return 1500;
        } else {
            return 1000;
        }

    }

}