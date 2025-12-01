using System;
class Produto
{
    public string Nome { get; set; }
    public double Preco { get; set; }
    public double Desconto { get; set; }

    public double CalcularPrecoFinal()
    {
        return Preco - (Preco * Desconto / 100);
    }
}
class Program
{
    static void Main()
    {
        Produto produto = new Produto
        {
            Nome = "Fone de ouvido",
            Preco = 200,
            // Valor do Desconto alterado de 15 para 25
            Desconto = 25 
        };
        
        // INCLUSÃO: Imprime o preço inicial (Preco)
        // Linha copiada e editada
        Console.WriteLine($"Preço inicial de {produto.Nome}: R$ {produto.Preco:F2}");

        // Imprime o preço final (CalcularPrecoFinal())
        Console.WriteLine($"Preço final de {produto.Nome}: R$ {produto.CalcularPrecoFinal():F2}");
    }
}
