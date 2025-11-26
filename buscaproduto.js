/**
 * Busca um produto em uma lista com base no seu nome.
 *
 * @param {Array<Object>} produtos - A lista de objetos de produtos.
 * @param {string} nomeBuscado - O nome do produto a ser buscado.
 * @returns {Object | null} O objeto do produto encontrado ou null se não for encontrado.
 */
function buscarProduto(produtos, nomeBuscado) {
    // A função utiliza uma estrutura de repetição (for...of) para percorrer a lista
    for (const produto of produtos) {
        // Compara a propriedade 'nome' do produto atual com o nome buscado
        if (produto.nome === nomeBuscado) {
            // Retorna o objeto completo do produto se o nome corresponder
            return produto;
        }
    }

    // Se a estrutura de repetição terminar sem encontrar o produto, retorna null
    return null;
}

// --- Exemplo de Uso ---
// 1. Definição da lista de produtos
const listaProdutos = [
    { nome: "Smartphone", preco: 1500.00 },
    { nome: "Notebook", preco: 3200.00 },
    { nome: "Teclado Mecânico", preco: 450.00 },
    { nome: "Mouse Sem Fio", preco: 120.00 }
];

// 2. Teste de busca para um produto existente
const nomeParaBuscar1 = "Notebook";
const produtoEncontrado1 = buscarProduto(listaProdutos, nomeParaBuscar1);

console.log(`Buscando por: "${nomeParaBuscar1}"`);
if (produtoEncontrado1) {
    console.log("Produto encontrado:", produtoEncontrado1);
} else {
    console.log(`Produto "${nomeParaBuscar1}" não encontrado.`);
}

console.log('---');

// 3. Teste de busca para um produto inexistente
const nomeParaBuscar2 = "Monitor Ultra Wide";
const produtoEncontrado2 = buscarProduto(listaProdutos, nomeParaBuscar2);

console.log(`Buscando por: "${nomeParaBuscar2}"`);
if (produtoEncontrado2) {
    console.log("Produto encontrado:", produtoEncontrado2);
} else {
    console.log(`Produto "${nomeParaBuscar2}" não encontrado.`);
}
