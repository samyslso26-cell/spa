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

const usuario1 = new usuario("Samuel", "samuel@example.com", "senha123");
const admin1 = new administrador("Admin", "admin@example.com", "admin123", "admin");
usuario1.fazerLogin("samuel@example.com", "senha123");
admin1.cadastrarProduto("Notebook", 2500);