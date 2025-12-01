# Define função para calcuclar preço final
def calcular_preco_final(nome, preco, desconto=0):
    # INCLUSÃO: Imprime o preço inicial com 2 casas decimais.
    print(f"Preço inicial de {nome}: R$ {preco:.2f}")

    # Cálculo do preço final
    preco_final = preco - (preco * desconto / 100)
    
    # Imprime o preço final com 2 casas decimais.
    print(f"Preço final de {nome}: R$ {preco_final:.2f}")

# Exemplo de uso com desconto de 25% (alterado de 15 para 25)
calcular_preco_final("Fone de ouvido", 200, 25)
