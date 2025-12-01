public class Produto {
    String nome;
    double preco;
    double desconto;

    public Produto(String nome, double preco, double desconto) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }

    public double calcularPrecoFinal() {
        return preco - (preco * desconto / 100);
    }

    public static void main(String[] args) {
        // Exemplo de uso com desconto de 25% (alterado de 15 para 25)
        Produto produto = new Produto("Fone de ouvido", 200, 25);
        
        // INCLUSÃO: Imprime o preço inicial
        // (Cópia e edição da linha de impressão do preço final)
        System.out.printf("Preço inicial de %s: R$ %.2f%n", produto.nome, produto.preco);

        // Imprime o preço final (comando original)
        System.out.printf("Preço final de %s: R$ %.2f%n", produto.nome, produto.calcularPrecoFinal());
    }
}
