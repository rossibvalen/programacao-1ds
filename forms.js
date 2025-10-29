/**
 * Sistema Simples de Cadastro de Clientes usando Array, Set e Map.
 *
 * Objetivo: Coletar 10 elementos para cada estrutura de dados (Lista de Nomes,
 * Conjunto de E-mails Únicos e Mapa de Telefones por ID) e exibi-los.
 */

// --- 1. Definição das Estruturas de Dados ---

const listaNomes = []; // Array: Permite duplicatas de nomes.
const conjuntoEmails = new Set(); // Set: Garante e-mails únicos.
const mapaTelefones = new Map(); // Map: Associa ID (chave) a Telefone (valor).

const NUM_ELEMENTOS = 10;

// --- 2. Funções de Cadastro ---

/**
 * Solicita ao usuário a entrada de 10 nomes e os adiciona à listaNomes.
 */
function cadastrarNomes() {
    console.log("--- INÍCIO DO CADASTRO DE NOMES (Array) ---");
    for (let i = 1; i <= NUM_ELEMENTOS; i++) {
        let nome = prompt(`[${i}/${NUM_ELEMENTOS}] Digite o nome do cliente:`);
        // Adiciona o nome, mesmo que seja repetido ou vazio (tratamento básico).
        if (nome) {
            listaNomes.push(nome.trim());
        } else {
            // Permite que o usuário insira menos de 10 se cancelar/deixar vazio
            // mas mantém o contador para a meta de 10.
            console.log(`Nome ${i} ignorado. (Vazio/Cancelado)`);
        }
    }
    console.log("--- CADASTRO DE NOMES CONCLUÍDO ---");
}

/**
 * Solicita ao usuário a entrada de 10 e-mails e os adiciona ao conjuntoEmails (apenas únicos).
 */
function cadastrarEmails() {
    console.log("\n--- INÍCIO DO CADASTRO DE E-MAILS (Set) ---");
    for (let i = 1; i <= NUM_ELEMENTOS; i++) {
        let email = prompt(`[${i}/${NUM_ELEMENTOS}] Digite o e-mail do cliente (apenas únicos serão considerados):`);

        if (email) {
            const emailFormatado = email.trim().toLowerCase();
            // O método add() do Set garante que apenas e-mails únicos serão armazenados.
            const tamanhoAnterior = conjuntoEmails.size;
            conjuntoEmails.add(emailFormatado);
            const tamanhoAtual = conjuntoEmails.size;

            if (tamanhoAnterior === tamanhoAtual) {
                console.log(`E-mail "${emailFormatado}" já existe e foi ignorado.`);
            }
        } else {
            console.log(`E-mail ${i} ignorado. (Vazio/Cancelado)`);
        }
    }
    console.log("--- CADASTRO DE E-MAILS CONCLUÍDO ---");
}

/**
 * Solicita ao usuário a entrada de 10 pares ID-Telefone e os adiciona ao mapaTelefones.
 */
function cadastrarTelefones() {
    console.log("\n--- INÍCIO DO CADASTRO DE TELEFONES (Map) ---");
    for (let i = 1; i <= NUM_ELEMENTOS; i++) {
        let id = prompt(`[${i}/${NUM_ELEMENTOS}] Digite o ID ÚNICO do cliente (chave do Map):`);
        let telefone = prompt(`[${i}/${NUM_ELEMENTOS}] Digite o telefone do cliente (valor do Map):`);

        if (id && telefone) {
            const idFormatado = id.trim();
            const telefoneFormatado = telefone.trim();

            if (mapaTelefones.has(idFormatado)) {
                console.log(`ID "${idFormatado}" já existe. O telefone será ATUALIZADO.`);
            }
            // O método set() do Map associa a chave (ID) ao valor (telefone).
            // Se a chave já existir, o valor é sobrescrito.
            mapaTelefones.set(idFormatado, telefoneFormatado);
        } else {
            console.log(`Par ID/Telefone ${i} ignorado. (Vazio/Cancelado)`);
        }
    }
    console.log("--- CADASTRO DE TELEFONES CONCLUÍDO ---");
}

// --- 3. Execução do Cadastro ---

cadastrarNomes();
cadastrarEmails();
cadastrarTelefones();

// --- 4. Exibição Organizada dos Dados ---

console.log("\n=======================================================");
console.log("       RESULTADO DO CADASTRO DE CLIENTES");
console.log("=======================================================");

// --- Exibição da Lista (Array) ---
console.log("\n*** Lista de Nomes Cadastrados: (Permite duplicatas) ***");
if (listaNomes.length > 0) {
    listaNomes.forEach((nome, index) => {
        console.log(`  [${index + 1}] Nome: ${nome}`);
    });
} else {
    console.log("Nenhum nome foi cadastrado.");
}


// --- Exibição do Conjunto (Set) ---
console.log("\n*** Conjunto de E-mails Únicos: (Sem duplicatas) ***");
if (conjuntoEmails.size > 0) {
    let contador = 1;
    conjuntoEmails.forEach(email => {
        console.log(`  [${contador++}] E-mail: ${email}`);
    });
} else {
    console.log("Nenhum e-mail foi cadastrado.");
}


// --- Exibição do Mapa (Map) ---
console.log("\n*** Mapa de Telefones por ID: (Associação Chave/Valor) ***");
if (mapaTelefones.size > 0) {
    let contador = 1;
    mapaTelefones.forEach((telefone, id) => {
        console.log(`  [${contador++}] ID: ${id} -> Telefone: ${telefone}`);
    });
} else {
    console.log("Nenhum par ID/Telefone foi cadastrado.");
}

console.log("\n=======================================================");

// Você pode copiar e colar este código em seu navegador (abrindo o console - F12)
// ou em uma ferramenta online para testar as chamadas prompt().
