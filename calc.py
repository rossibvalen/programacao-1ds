# 1. Solicita os 4 números via input e os armazena em uma lista
numeros = []
for i in range(4):
    valor = input(f"Digite o {i+1}º número: ")
    # 2. Converte cada valor para float e adiciona à lista
    numeros.append(float(valor))

# 3. Calcula a média aritmética dos valores da lista
media = sum(numeros) / len(numeros)

# 4. Exibe o resultado formatado com duas casas decimais
print(f"A média dos números fornecidos é: {media:.2f}")
