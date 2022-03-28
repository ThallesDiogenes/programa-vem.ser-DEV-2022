let pessoaThalles = {
    //propriedades
    nome: "Thalles",
    idioma: "Português",
    idade: 32,
    altura: 1.71,
    peso: 92,
    velocidade: 0,
    estado: "parado",

    // ações
    andar: function () {
        if (this.estado === "parado") {
            console.log("Começando a andar...");
            this.velocidade+=1;
            this.estado = "andando";
        }
    },

    acelerar: function () {
        console.log("Acelerando...");
        this.velocidade+=5;
        if (this.velocidade >= 10) {
            this.estado = "correndo";
        };
    },

    desacelerar: function () {
        if (this.estado === "andando" || this.estado === "correndo" && this.velocidade > 0) {
            this.velocidade-=5;
            if (this.velocidade < 10) {
                console.log("Desacelerando...");
                this.estado = "andando";
            } else {
                console.log("Parando...")
            }
        }
    },

    parar: function () {
        this.velocidade--;
        if (this.estado === "andando" && this.velocidade === 0) {
            console.log("Parado...");
            this.estado = "parado";
        }
    },
};

console.log("Estado de Thalles:" + pessoaThalles.estado);
pessoaThalles.andar();
pessoaThalles.acelerar();
pessoaThalles.acelerar();
pessoaThalles.desacelerar();
pessoaThalles.desacelerar();
pessoaThalles.parar();
console.log("Velocidade:" + pessoaThalles.velocidade);
console.log("Estado de Thalles:" + pessoaThalles.estado);