class Evento{
    nome: string;
    data: string;
    horario: string;

    constructor(nome: string, data: string, horario: string){
        this.nome = nome;
        this.data = data;
        this.horario = horario;
    }
}
class Agenda{
    private agendamento: Evento[]=[];

    constructor(){

    }
    adicionarEvento(eventos: Evento){
        this.agendamento.push(eventos);
    }
    visualizar(){
        console.log("Os eventos agendados são: ");
            for(let i=0; i<this.agendamento.length; i++){
                console.log(this.agendamento[i]);
            }
    }

    removerEvento(evento:Evento){
        this.agendamento = this.agendamento.filter(item => item.nome != evento.nome);
    }

}
const evento1 = new Evento("Casamento","10/10/2023","18:30");
const evento2 = new Evento ("Batismo","15/10/2023","9:00");
const evento3 = new Evento ("Festa de Aniversário","20/10/2023","20:00");

const meusEventos = new Agenda
meusEventos.adicionarEvento(evento1);
meusEventos.adicionarEvento(evento2);
meusEventos.adicionarEvento(evento3);


console.log(meusEventos.visualizar());


