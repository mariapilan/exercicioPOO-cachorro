"use strict";
class funcionario {
    constructor(funcionario, cargo, salario, inss, ir, aumento) {
        this.funcionario = funcionario;
        this.cargo = cargo;
        this.salario = salario;
        this.inss = inss;
        this.ir = ir;
        this.aumento = aumento;
    }
    apresentarFuncionario() {
        return "Nome: " + this.funcionario + ", Cargo: " + this.cargo + ", Salário: " + this.salario;
    }
    apresentarImposto1(inss, ir) {
        let valorINSS = (this.salario / 100) * inss;
        let valorIR = ((this.salario - valorINSS) / 100) * ir;
        let total = (valorINSS + valorIR);
        return " Salario Bruto: " + this.salario + "," + " Imposto do INSS de " + inss + "%, com valor de: R$" + valorINSS +
            ", " + "Imposto de Renda de " + ir + "%, com valor de: R$" + valorIR + ", " + "Total de Impostos: R$" + (valorINSS + valorIR) + ", " + "Salário Líquido: R$" + (this.salario - total);
    }
    aumentarSalario() {
        let aumento = (this.salario / 100) * this.aumento;
        return this.funcionario + " seu novo salário é de R$" + (this.salario + aumento);
    }
}
let funcionario1 = new funcionario("Ana Silva", "Analista de Vendas", 3000, 11, 7.5, 10);
let funcionario2 = new funcionario("Maria", "Pintora", 2750, 11, 7.5, 10);
console.log(funcionario1.apresentarFuncionario());
console.log(funcionario1.apresentarImposto1(11, 7.5));
console.log(funcionario1.aumentarSalario());
console.log(funcionario2.apresentarFuncionario());
console.log(funcionario2.aumentarSalario());
