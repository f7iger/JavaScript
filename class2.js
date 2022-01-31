class avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome;
    }
};

class pai {
    constructor(sobrenome, profissao = "Professor"){
        super(sobrenome);
        this.profissao = profissao;
    }
}

class filho {
    constructor(){
        super("Alves");
    }
}

let Filho = new filho
console.log(Filho)