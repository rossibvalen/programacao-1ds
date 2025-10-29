10

/**
 * Programa JavaScript que simula o envio de mensagens de agradecimento
 * usando a estrutura de iteração for...of.
 */

// REQUISITO 1: Crie um array chamado clientes com pelo menos 5 nomes fictícios.
const clientes = [
    "Ana Silva",
    "Bruno Mendes",
    "Carla Oliveira",
    "David Santos",
    "Elisa Rodrigues"
];

console.log("--- INICIANDO O PROCESSO DE ENVIO DE AGRADECIMENTOS ---");

// REQUISITO 2 e 3: Use um loop for...of para percorrer o array 
// e exibir a mensagem personalizada.
for (const nome of clientes) {
    // Para cada nome, exibe no console a mensagem: "Enviando e-mail de agradecimento para [nome]."
    console.log(`Enviando e-mail de agradecimento para ${nome}.`);
}

console.log("--- PROCESSO CONCLUÍDO. TODOS os e-mails foram simulados. ---");




12

// A lista de compras contém 11 registros para satisfazer o requisito de "no mínimo 10".
// As datas são definidas de forma a simular compras recentes e antigas.
const listaDeCompras = [
  { cliente: "Ana Silva", produto: "Notebook Gamer", dataCompra: "2025-09-01" }, // Antiga
  { cliente: "Bruno Costa", produto: "Fone de Ouvido", dataCompra: "2025-10-25" }, // Recente
  { cliente: "Carla Souza", produto: "Mouse Sem Fio", dataCompra: "2025-09-28" }, // Limite/Recente
  { cliente: "Daniel Lima", produto: "Teclado Mecânico", dataCompra: "2025-10-05" }, // Recente
  { cliente: "Elisa Gomes", produto: "Monitor Ultra-Wide", dataCompra: "2025-10-15" }, // Recente
  { cliente: "Fábio Mendes", produto: "Webcam Full HD", dataCompra: "2025-08-10" }, // Antiga
  { cliente: "Giovana Rios", produto: "Cadeira Gamer", dataCompra: "2025-10-20" }, // Recente
  { cliente: "Hugo Pereira", produto: "SSD 1TB", dataCompra: "2025-07-29" }, // Antiga
  { cliente: "Iara Santos", produto: "Mochila para Notebook", dataCompra: "2025-10-28" }, // Recente
  { cliente: "João Almeida", produto: "Roteador Wi-Fi 6", dataCompra: "2025-09-15" }, // Antiga
  { cliente: "Karen Lins", produto: "Pen Drive 64GB", dataCompra: "2025-10-01" }, // Recente
];

// --- Lógica de Filtro por Data ---

// 1. Obter a data e hora atual (base para o cálculo)
const hoje = new Date();

// 2. Calcular o ponto de corte: 30 dias em milissegundos
// 1000ms * 60s * 60m * 24h * 30 dias
const trintaDiasEmMs = 1000 * 60 * 60 * 24 * 30;

// 3. Determinar a data limite (30 dias atrás)
const dataLimiteMs = hoje.getTime() - trintaDiasEmMs;
const dataLimite = new Date(dataLimiteMs);


console.log("--- Relatório de Compras Recentes (Últimos 30 Dias) ---");
console.log(`Data Atual (Base): ${hoje.toLocaleDateString('pt-BR')}`);
console.log(`Data de Corte (30 dias atrás): ${dataLimite.toLocaleDateString('pt-BR')}`);
console.log("---------------------------------------------------------");

// Variável para rastrear se encontramos alguma compra
let encontrouCompras = false;

/**
 * Uso do forEach para iterar sobre a lista e aplicar a lógica de filtro.
 */
listaDeCompras.forEach(compra => {
  // Converte a string de data da compra para um objeto Date
  const dataDaCompra = new Date(compra.dataCompra);

  // Verifica se a compra ocorreu na data limite ou depois dela
  if (dataDaCompra.getTime() >= dataLimite.getTime()) {
    // Exibe o registro na tela (console)
    console.log(
      `✅ Cliente: ${compra.cliente} | Produto: ${compra.produto} | Data: ${dataDaCompra.toLocaleDateString('pt-BR')}`
    );
    encontrouCompras = true;
  }
});

// Mensagem de conclusão ou caso não encontre nada
if (!encontrouCompras) {
    console.log("Nenhum cliente realizou compras nos últimos 30 dias.");
}
console.log("---------------------------------------------------------");




14
// 1. Lista inicial com nomes repetidos
const listaComDuplicatas = [
  "Alice",
  "Bruno",
  "Carla",
  "Daniel",
  "Alice", // Duplicata
  "Elisa",
  "Fábio",
  "Carla", // Duplicata
  "Giovana",
  "Hugo",
  "Bruno" // Duplicata
];

console.log("--- Lista Original (com Duplicatas) ---");
console.log(listaComDuplicatas);

// 2. Usar o objeto Set para remover duplicatas
// O construtor Set aceita um array iterável e armazena apenas valores únicos.
const nomesUnicosSet = new Set(listaComDuplicatas);

console.log("\n--- Nomes Únicos (Processados pelo Set) ---");

// 3. Obter um Iterador do Set
// O Set é um objeto iterável por si só, mas aqui vamos obter explicitamente o iterador
const iteradorNomes = nomesUnicosSet[Symbol.iterator]();

// 4. Usar o Iterador para Percorrer e Exibir os Nomes
// O método next() avança o iterador e retorna um objeto { value: '...', done: false/true }
let resultado = iteradorNomes.next();

let contador = 1;

while (!resultado.done) {
  // Exibir o nome único
  console.log(`${contador}. ${resultado.value}`);

  // Avançar para o próximo elemento
  resultado = iteradorNomes.next();
  contador++;
}

console.log("\n--- Processo Concluído ---");
