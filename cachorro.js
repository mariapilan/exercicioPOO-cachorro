"use strict";
class cachorro {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    apresentar() {
        return " Oi, eu sou " + this.nome + " um "
            + this.raca + " de " + this.idade + " anos ";
    }
    apresentarPara(humano) {
        return " Olá " + humano + ", eu sou " + this.nome + " um "
            + this.raca + " de " + this.idade + " anos ";
    }
}
let Charlotte = new cachorro("Charlotte", "Golden Retriever", 1);
let Maya = new cachorro("Maya", "Labrador", 2);
let Anitta = new cachorro("Anitta", "Lhasa Apso", 8);
let Pandora = new cachorro("Pandora", "Vira-lata", 1);
console.log(Charlotte.nome);
console.log(Maya.nome);
console.log(Anitta.nome);
console.log(Pandora.nome);
console.log("");
console.log(Charlotte.apresentar());
console.log(Maya.apresentar());
console.log(Anitta.apresentar());
console.log(Pandora.apresentar());
console.log("");
console.log(Charlotte.apresentarPara("duda"));
console.log(Maya.apresentarPara("maria"));
console.log(Anitta.apresentarPara("eduarda"));
console.log(Pandora.apresentarPara("pilan"));
