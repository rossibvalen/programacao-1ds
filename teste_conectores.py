def classificar_produto(preco):
    if preco <= 100:
        return "Baixo custo"
    elif 101 <= preco <= 500:
        return "Médio custo"
    else:
        return "Alto custo"

# Perguntar o preço do produto
preco_produto = float(input("Digite o preço do produto: R$ "))

# Classificar e exibir o resultado
categoria = classificar_produto(preco_produto)
print(f"O produto se enquadra na categoria: {categoria}")
