"use strict";
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana["Segunda"] = "Segunda Feira";
    DiasDaSemana["Terca"] = "Terca Feira";
    DiasDaSemana["Quarta"] = "Quarta Feira";
    DiasDaSemana["Quinta"] = "Quinta Feira";
    DiasDaSemana["Sexta"] = "Sexta Feira";
    DiasDaSemana["Sabado"] = "Sabado";
    DiasDaSemana["Domingo"] = "Domingo";
})(DiasDaSemana || (DiasDaSemana = {}));
let diaHoje = DiasDaSemana.Sexta;
//console.log("Hoje é " + DiasDaSemana[diaHoje]);
console.log("Hoje é " + diaHoje);
