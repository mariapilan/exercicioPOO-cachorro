"use strict";
class ContaBancaria2 {
    constructor(numeroConta, saldo, titular) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;
    }
}
class ContaCorrente extends ContaBancaria2 {
    constructor(limiteChequeEspecial) {
        super("Conta corrente", 2000, "maria");
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    Depositar(valor) {
        this.saldo = this.saldo + valor;
        console.log("O saldo após o depósito é de " + this.saldo);
    }
    Sacar(valor) {
        let msgSaque = " Saque realizado com sucesso!";
        if (valor > (this.saldo + this.limiteChequeEspecial)) {
            msgSaque = " Saldo insuficiente";
        }
        else {
            this.saldo = this.saldo - valor;
            msgSaque = " Voce fez um saque de " + valor + ". Seu saldo é de R$ " + this.saldo;
        }
        console.log(msgSaque);
    }
    Consultar() {
        return this.saldo;
    }
}
class ContaPoupanca extends ContaBancaria2 {
    constructor(calcularRendimentoAnual) {
        super("Conta poupança", 5000, "maria");
    }
    Depositar(valor) {
        this.saldo = this.saldo + valor;
        console.log("O saldo após o depósito é de " + this.saldo);
    }
    Sacar(valor) {
        let msgSaque = " Saque realizado com sucesso!";
        if (valor > this.saldo) {
            msgSaque = " Saldo insuficiente";
        }
        else {
            this.saldo = this.saldo - valor;
            msgSaque = " Voce fez um saque de " + valor + ". Seu saldo é de R$ " + this.saldo;
        }
        console.log(msgSaque);
    }
    Consultar() {
        return this.saldo;
    }
    calcularRendimentoAnual(taxa) {
        return this.saldo + ((this.saldo / 100) * taxa);
    }
}
