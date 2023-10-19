class ProdutoLoja{
  nome: string;
  preco: number;

  constructor(nome: string, preco: number){
    this.nome = nome;
    this.preco = preco;
  }

}

class CarrinhoDeCompras{
  produtosDoCarrinho: ProdutoLoja[];
  constructor(){
    this.produtosDoCarrinho = [];
  }

  adicionarProduto(produto: ProdutoLoja){
    this.produtosDoCarrinho.push(produto);
  }

  excluirProduto(nomeDoProduto: string){
   this.produtosDoCarrinho = this.produtosDoCarrinho.filter((item) =>item.nome !== nomeDoProduto);

  }
   
  calcularValorTotal(){
    let soma = 0;
    for (let i = 0; i < this.produtosDoCarrinho.length; i++){
        soma = soma + this.produtosDoCarrinho[i].preco;
    }

    return soma.toFixed(2);
  }

  exibirProdutos(){
    console.log("Produtos do Carrinho: ");
    for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
        console.log("Produto: " + this.produtosDoCarrinho[i].nome + "R$"+ this.produtosDoCarrinho[i].preco.toFixed(2));
    }
  }

}


class Loja{
    produtosDoEstoque: ProdutoLoja[] = [];
    carrinhoDeCompras = new CarrinhoDeCompras();

    constructor(){

    }

    adicionarProdutoAoEstoque(produto: ProdutoLoja){
       this.produtosDoEstoque.push(produto);
    }

    removerProdutoDoEstoque(produto: ProdutoLoja){
       this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome !== produto.nome)
    }

    adicionarProdutoAoCarrinho(produto: ProdutoLoja){
        const produtoEncontrado = this.produtosDoEstoque.find(item => item.nome === produto.nome);
        if(produtoEncontrado){
            this.carrinhoDeCompras.adicionarProduto(produtoEncontrado);
            return "Produto adicionado ao carrinho de compras";
        }
        else{
            return "Produto não encontrado no estoque da loja";
        }

    }

    removerProdutoDoCarrinho(produto: ProdutoLoja){
        this.carrinhoDeCompras.excluirProduto(produto.nome);

    }

    exibirProdutoDoCarrinho(){
        this.carrinhoDeCompras.exibirProdutos();
    }
    
    
}
// Criando Produtos

const produtoLoja1 = new ProdutoLoja("Camiseta", 29.99);
const produtoLoja2 = new ProdutoLoja("Calça", 59.99);
const produtoLoja3 = new ProdutoLoja("Sapato", 39.99);
const produtoLoja4 = new ProdutoLoja("Meia", 19.99);

// Criando a Loja

const minhaLoja = new Loja();

// Adicionando Produto Ao Estoque

minhaLoja.adicionarProdutoAoEstoque(produtoLoja1);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja2);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja3);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja4);

// Adicionando Produto Ao Carrinho de Compras

minhaLoja.adicionarProdutoAoCarrinho(produtoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja4);

// Remover Produto Do Carrinho de Compras

minhaLoja.removerProdutoDoCarrinho(produtoLoja4);

// Remover Produto do Estoque da Loja

minhaLoja.removerProdutoDoEstoque(produtoLoja4);

// Exibindo Produtos do Carrinho de Compras

minhaLoja.exibirProdutoDoCarrinho();

// Exibindo Valor total do carrinho

console.log("Total de carrinho de compras: R$" + minhaLoja.carrinhoDeCompras.calcularValorTotal());