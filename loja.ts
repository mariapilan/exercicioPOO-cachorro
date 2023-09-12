class produtoLoja{
    nome: string;
    preco: number;

constructor(nome: string, preco: number){
    this.nome = nome;
    this.preco = preco;
}

}
class carrinhoDeCompras{
    produtos: produtoLoja[]=[];
constructor(){}

    adicionarProduto1(produtoloja1: produtoLoja){
        this.produtos.push(produtoloja1);
    
    }
    
    removerProduto1(produtos: produtoLoja){
        this.produtos = this.produtos.filter(item => item.nome != produtos.nome);
        return "Produto removido"
    }

    calcularTotal(){
        let valorTotal = 0;
        for(const item of this.produtos){
            valorTotal = valorTotal + item.preco;
        }
        
        return valorTotal.toFixed(2);

    }

    
    }
    
    
    class loja{
        estoque:produtoLoja[]=[];
        carrinho = new carrinhoDeCompras();

        adicionarProdutoEstoque(produto: produtoLoja){
            this.estoque.push(produto);
        }

        removerProdutoEstoque(produto: produtoLoja){
            this.estoque = 
            this.estoque.filter(
                item => item.nome !== produto.nome);
                return "Produto removido do estoque da loja";
        }

        adicionarProdutoNoCarrinho(produto: produtoLoja){
            const produtoEncontrado = this.estoque.find(
                item => item.nome == produto.nome 
            );
            if (produtoEncontrado){
               this.carrinho.adicionarProduto1(produto);
                
                return "Produto adicionado ao carrinho de compras";

            }
            else{
                return "Produto não encontrado no estoque";
            }

        }
        removerProdutoDoCarrinho(produto: produtoLoja){
             return this.carrinho.removerProduto1(produto);
        }

        exibirProdutos(){
            
        }
   
    }



let produtoloja1 = new produtoLoja('Fita de Led', 35);
