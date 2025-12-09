let palavra = "";

// O laço continua ENQUANTO o tamanho da 'palavra' for menor ou igual a 8.
while (palavra.length <= 8) {
  // Solicita a entrada do usuário
  palavra = prompt("Digite uma palavra com mais de 8 letras:");

  // Verifica se o usuário pressionou "Cancelar" ou deixou vazio
  if (palavra === null || palavra.trim() === "") {
    alert("Entrada inválida. Por favor, digite uma palavra.");
    palavra = ""; // Redefine para garantir que o loop continue se a entrada for vazia
    continue;
  }

  // Se o tamanho da palavra ainda não atende ao critério, exibe um alerta
  if (palavra.length <= 8) {
    alert(`A palavra "${palavra}" tem ${palavra.length} letras. É preciso ter mais de 8!`);
  }
}

// Quando o loop termina, a condição (palavra.length <= 8) é falsa,
// ou seja, a palavra tem mais de 8 letras.
console.log(`Parabéns! A palavra "${palavra}" foi aceita com ${palavra.length} letras.`);


// 1. Inicializa a variável que vai ACUMULAR a soma dos números.
let somaTotal = 0;

// 2. O laço 'while' continua ENQUANTO a soma não ultrapassar 500.
while (somaTotal <= 500) {
  // 3. Gera um número aleatório (inteiro, por exemplo, entre 1 e 100).
  // Math.random() gera entre 0 (inclusivo) e 1 (exclusivo).
  let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

  // Opcional: Mostra o número gerado
  console.log(`Gerado: ${numeroAleatorio}. Soma atual: ${somaTotal}`);

  // 4. Adiciona o novo número à soma total (Acumulação).
  somaTotal += numeroAleatorio;
}

// 5. Quando o laço termina, a soma ultrapassou 500.
console.log("-----------------------------------------");
console.log(`FIM: A soma final ultrapassou 500, totalizando ${somaTotal}.`);


let tamanho;

// 1. O laço do-while garante que a solicitação seja feita PELO MENOS uma vez.
do {
  // Solicita o tamanho do calçado
  let entrada = prompt("Digite o tamanho do calçado (entre 34 e 44):");

  // Converte a entrada para um número inteiro
  tamanho = parseInt(entrada);

  // 2. Verifica se a entrada não é um número (NaN) ou se está fora da faixa
  if (isNaN(tamanho) || tamanho < 34 || tamanho > 44) {
    alert("Tamanho inválido! Por favor, digite um número entre 34 e 44.");
  }

// 3. A condição de repetição é: continuar enquanto for NaN OU estiver fora da faixa.
} while (isNaN(tamanho) || tamanho < 34 || tamanho > 44);

// 4. O loop parou, o tamanho é válido.
console.log(`Tamanho de calçado aceito: ${tamanho}.`);


let numero = 0;

// O loop continua ENQUANTO o número gerado
// for diferente de 0 OU (não for múltiplo de 3 OU não for múltiplo de 5).
// O primeiro "numero === 0" garante que o loop execute pelo menos uma vez,
// já que a variável começa em 0.
while (numero === 0 || (numero % 3 !== 0 || numero % 5 !== 0)) {

  // Gera um número inteiro aleatório entre 1 e 100.
  numero = Math.floor(Math.random() * 100) + 1;

  console.log("Gerado:", numero);

  // Se o número for múltiplo de 3 E múltiplo de 5, ele também é múltiplo de 15.
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("Condição encontrada!");
    break; // Encerra o loop imediatamente
  }
}

console.log("-----------------------------------------");
console.log(`Múltiplo de 3 E 5 encontrado: ${numero}`);


let idade;

// O bloco 'do' é executado primeiro.
do {
  // 1. Solicita a idade ao usuário.
  let entrada = prompt("Digite sua idade (entre 18 e 60 anos):");

  // 2. Converte a entrada para um número inteiro.
  idade = parseInt(entrada);

  // 3. Verifica as condições de invalidez para dar feedback imediato.
  // isNaN(idade): verifica se o usuário digitou algo que não é um número.
  // idade < 18: verifica se a idade é menor que o limite inferior.
  // idade > 60: verifica se a idade é maior que o limite superior.
  if (isNaN(idade) || idade < 18 || idade > 60) {
    alert("❌ Idade inválida! Por favor, digite um número entre 18 e 60.");
  }

// 4. A condição 'while' repete o ciclo 'do' se a idade continuar inválida.
} while (isNaN(idade) || idade < 18 || idade > 60);

// 5. Se o código chegou aqui, a idade é válida.
console.log(`✅ Idade aceita: ${idade} anos.`);


let senha = "";
let temLetra = false;
let temNumero = false;

// O loop continua ENQUANTO for verdadeiro que a senha NÃO tem letra OU NÃO tem número.
while (!temLetra || !temNumero) {
  // Solicita a senha
  senha = prompt("Digite uma senha (deve conter pelo menos 1 letra e 1 número):");

  // Verifica as condições usando Expressões Regulares
  temLetra = /[a-zA-Z]/.test(senha);
  temNumero = /\d/.test(senha);

  // Se a senha não atender aos critérios, emite um alerta
  if (!temLetra || !temNumero) {
    let feedback = "Senha inválida. Necessário:";
    if (!temLetra) {
      feedback += "\n- Pelo menos 1 letra.";
    }
    if (!temNumero) {
      feedback += "\n- Pelo menos 1 número.";
    }
    alert(feedback);
  }
}

console.log("✅ Senha aceita! (Contém letra e número)");
