class usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    fazerLogin(email, senha) {
        if (this.email === email && this.senha === senha) {
            console.log("Login bem-sucedido!");
        } else {
            console.log("Email ou senha incorretos.");
        }
    }
}

class administrador extends usuario {
    constructor(nome, email, senha, nivelAcesso) {
        super(nome, email, senha);
        this.nivelAcesso = nivelAcesso;
    }
    cadastrarProduto(nomeProduto, preco) {
        console.log("Produto " + nomeProduto + " cadastrado com preço R$" + preco + ".");
    }
}