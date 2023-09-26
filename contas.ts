abstract class ContaBancaria2{
     protected numeroConta: string;
     protected saldo: number;
     protected titular: string;


     constructor(numeroConta: string, saldo: number, titular:string){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;
     }

     abstract Depositar(valor: number): void;
     abstract Sacar(valor: number): void;
     abstract Consultar(): number;
}




class ContaCorrente extends ContaBancaria2{
   
    limiteChequeEspecial: number;
  
    constructor(limiteChequeEspecial: number){
        super("Conta corrente", 2000, "maria");
        this.limiteChequeEspecial = limiteChequeEspecial;
       

        
    }
     Depositar(valor: number): void {
        this.saldo = this.saldo + valor;
        console.log("O saldo após o depósito é de " + this.saldo)
     }
     Sacar(valor: number): void {
        let msgSaque = " Saque realizado com sucesso!";
        if(valor > (this.saldo + this.limiteChequeEspecial)){
            msgSaque= " Saldo insuficiente";
        }else{
            this.saldo=this.saldo-valor;
        msgSaque= " Voce fez um saque de "+ valor+". Seu saldo é de R$ "+ this.saldo;
           
        }
        console.log (msgSaque);
       
    }

      Consultar(): number {
          return this.saldo;
          
      }
    }
    class ContaPoupanca extends ContaBancaria2{
        
         
    constructor(calcularRendimentoAnual: number){
        super("Conta poupança", 5000, "maria");
    

    }
    Depositar(valor: number): void {
        this.saldo = this.saldo + valor;
        console.log("O saldo após o depósito é de " + this.saldo)
     }
     Sacar(valor: number): void {
        let msgSaque = " Saque realizado com sucesso!";
        if(valor > this.saldo){
            msgSaque= " Saldo insuficiente";
        }else{
            this.saldo=this.saldo-valor;
        msgSaque= " Voce fez um saque de "+ valor+". Seu saldo é de R$ "+ this.saldo;
           
        }
        console.log (msgSaque);
       
    }

      Consultar(): number {
          return this.saldo;
          
      }
      calcularRendimentoAnual(taxa: number): number{
         return this.saldo + ((this.saldo/100) *taxa);
      }
    }
