class hero {
    constructor(name, idade, tipo) {
        this.name = name;
        this.idade = idade;
        this.tipo = tipo;
        if (this.tipo == "mago") {
            this.ataque = "magia";
        } else if (this.tipo == "guerreiro") {
            this.ataque = "espada";
        } else if (this.tipo == "monge") {
            this.ataque = "artes marciais";
        } else if (this.tipo == "ninja") {
            this.ataque = "shuriken";
        }
    }
    atacar() {
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`);
    }
}

let mago = new hero ("Gandalf", 85, "mago");
let guerreiro = new hero ("Arthur", 30, "guerreiro");
let monge = new hero ("Chen", 40, "monge");
let ninja = new hero ("Akira", 25, "ninja");

mago.atacar();