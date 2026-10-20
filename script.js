


// -- -- Aula1 Java -- -- 


//console.log() mostra uma informação no console
console.log("Olá, Mundo!");
console.log(6 + "  7");
console.log(2 + 2);


console.log(typeof "Olá, mundo!"); // string
console.log(typeof 17); // number
console.log(typeof 10.5); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean


//variável
//const não pode ter seu valor alterado durante o programa 
const nome = "Talita ";
console.log(nome);


//let pode ter seu valor alterado durante o programa
let idade = 17;
console.log(idade);

console.log("Olá, " + nome + ", que tem " + idade + "anos.");

idade = 18;
console.log(idade);



console.log(`Olá, ${nome},  que tem ${idade} anos.`);


//variável


let apelido = "Taehyung";


let peso = 79;
console.log(peso);

console.log("Olá, " + apelido + ", que tem " + peso + "kg.");

peso = 90;
console.log(peso);

apelido = "Tae";
console.log(apelido);

console.log(`Olá, ${apelido},  que tem ${peso} kg. `);


//Métodos de string
const texto = "pneumOultramicroscopIcossilicovulcanOconiótico";


//conta quantos caracteres a sring tem
console.log(texto.length);

//altera todas as letras para maiúsculo
console.log(texto.toUpperCase());

//altera todas as letras para minúsculo
console.log(texto.toLowerCase());


const nome_completo = "Rayanne Karolliny Freitas Miranda";

console.log(nome_completo.includes("Freitas"));


console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false
console.log("10" == 10); // true
console.log("10" === 10); // false
console.log(10 !== 5); // true

const idadePessoa = 17;
console.log(idadePessoa >= 18); // false
console.log(idadePessoa >= 16); // true


const nome_exemplo = "Rayka Freitas"

const exemplo_nome = "Raikan"

console.log(exemplo_nome === "Raikan"); // true
console.log(nome_exemplo === "Raikan"); // false

// coletamos a idade da pessoa
let pessoaIdade = 15;
// verificar se a idade é maior que 18
if (pessoaIdade >= 18) {
    // se maior ou igual a 18, então ela é maior de idade
    console.log("Já Pode Ser Preso HAHAHAHAHAHA!")
} else {
    // senão, então ela é menor de idade
    console.log("Não vai pra balada! 😂😂😂")
}


// coletamos a idade da pessoa
let idadeVotacao = 16;
// verificar se a idade da pessoa é maior que 70
if (idadeVotacao > 70) {
    console.log("Você não é obrigado a votar!")
} else if (idadeVotacao >= 18) {
    // senão se a idade da pessoa for maior ou igual a 18
    console.log("Você tem que votar obrigatoriamente!")
} else if (idadeVotacao >= 16) {
    // senão se a idade da pessoa for maior ou igual a 16
    console.log("Você não é obrigado a votar, mas caso queira pode!")
} else {
    // senão for nenhuma das alternativas anteriores
    console.log("Você não pode votar!")

}






// exercícios da aula 1



//----- Atividade 1 Aprovação escolar: Receba a média final de um aluno. Se a média for maior ou igual a 7, informe "Aprovado". Caso contrário, informe "Reprovado".


//coletamos a nota do aluno
let mediaAluno = 5;
//verificamos se a nota for maior ou igual a 7
if (mediaAluno >= 7) {
    console.log("Aluno(a) aprovado(a).")
    //senão se a idade for igual ou maior que 7
} else {
    //senão se a idade for menor que 7
    console.log("Aluno(a) reprovado(a).")
}

//--------- Atividade 2  Comparação de dois números: Receba dois números e informe qual deles é o maior. Se os dois forem iguais, informe que houve empate.




//coletamos o primeiro número
let n1 = 10;
//coletamos o segundo número
let n2 = 5;

if (n1 > n2) {
    //se o primeiro numero for maior que o segundo
    console.log("O primeiro número é o maior.")
} else if (n2 > n1) {
    //se o segundo numero for menor que o primeiro
    console.log("O segundo número é o maior.")
} else {
    //senão os dois números forem iguais
    console.log("Houve um empate.")
}


//---------- Atividade 3  Verificação de senha: Receba uma senha e verifique se ela é igual a senai123. Se for igual, exiba "Acesso autorizado". Caso contrário, exiba "Senha incorreta".


//recebo a senha
let senhaSenai = "senhabobona"
//verifico se está correta
if (senhaSenai == "senai123") {
    //se estiver certa
    console.log("Acesso autorizado.")
} else {
    //se estiver errada
    console.log("Senha incorreta.")
}


//--------- Atividade 4  Classificação de temperatura: Receba uma temperatura em graus Celsius e classifique-a:

// temperatura recebida
let temperatura = 18

//Abaixo de 18°C

if (temperatura < 18) {
    console.log("Frio.")
} else if (temperatura <= 27) {
    console.log("Agradável.")
} else if (temperatura >= 27) {
    console.log("Quente.")
}

//--------- Atividade 5 Classificação de Nota


//receber uma nota de 0 a 10
let nota = 8
//se a nota for a partir de 9
if (nota >= 9) {
    console.log("Excelente!")
} else if (nota >= 7) {
    console.log("Bom!")
}
else if (nota <= 5) {
    console.log("Insuficiente!")
}



//-------------- Atividade 6 dia da semana


//primeiro número
let dia = 7
if (dia == 1) {
    console.log("Domingo")
} else if (dia == 2) {
    console.log("Segunda-feira")
} else if (dia == 3) {
    console.log("Terça-feira")
} else if (dia == 4) {
    console.log("Quarta-feira")
} else if (dia == 5) {
    console.log("Quinta-feira")
} else if (dia == 6) {
    console.log("Sexta-feira")
} else if (dia == 7) {
    console.log("Sábado")
}
else {
    console.log("Dia inválido.")
}




//-- -- Aula2 Java -- --








let idadeDirigir = 19;
let temCNH = true;
let temCarro = false;

if (idadeDirigir >= 18 && temCNH == true && temCarro == true) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir!")
}


let ehProfessor = false;
let ehAluno = false;

if (ehProfessor == true || ehAluno == true) {
    console.log("Você tem direito a meia-entrada!")
} else {
    console.log("Você não tem direito a meia-entrada!")
}

//  && = e
//  || = ou



//exercícios da aula 2


//-------- Atividade 1 -------------
// 01 — Número dentro do intervalo: Receba um número e informe se ele está entre 10 e 50, inclusive. Caso contrário, informe que está fora do intervalo.

let nRecebido1 = 10;

if (nRecebido1 > 10 && nRecebido1 < 50) {
    console.log("Seu número está entre 10 e 50.")
} else {
    console.log("Seu número está fora do intervalo.")
}



// --------- Atividade 2 ---------------
//02 — Elegibilidade para estágio: Uma oportunidade de estágio é destinada a candidatos com idade entre 16 e 24 anos, inclusive. Receba a idade e informe se o candidato atende ao requisito.

let idadeEstágiario = 16;
if (idadeEstágiario > 16 && idadeEstágiario < 24) {
    console.log("Você atende ao requisito.")
} else {
    console.log("Você não atende ao requisito.")
}

//----------------- Atividade 3 ---------------
//03 — Frete grátis: Uma loja oferece frete grátis para clientes que realizam compras de R$ 200 ou mais ou que são assinantes. Receba o valor da compra e uma variável booleana indicando se o cliente é assinante. Informe se ele tem direito ao frete grátis.




let compra = 20;
let assinante = true;

if (compra >= 200 || assinante == true) {
    console.log("Você tem direito ao frete grátis!")
} else {
    console.log("Você não tem direito ao frete grátis!")
}

//---------- Atividade 4 ----------
//04 — Dia de descanso: Receba o nome de um dia da semana. Se for sábado ou domingo, exiba "Fim de semana". Caso contrário, exiba "Dia útil".

let diaSemana = "Sexta-feira";

if (diaSemana == "Sábado" || diaSemana == "Domingo") {
    console.log("Fim de semana.")
} else {
    console.log("Dia útil.")
}


//--------- Atividade 5 --------------
//05 — Promoção especial:Uma loja aplica 15% de desconto se o cliente: Realizar uma compra de R$ 150 ou mais e for assinante; ou Possuir um cupom promocional válido, independentemente de ser assinante. Receba o valor da compra e duas variáveis booleanas (assinante e cupom válido). Informe se o desconto será aplicado e apresente o total final.

let valorCompra = 150;
let ehAssinante = true;
let cupomVálido = true;


if (valorCompra >= 150 || ehAssinante == true || cupomVálido == true) {
    console.log("O cupom é válido e será aplicado")
    console.log(`Sua compra com o cupom de 15% de desconto, tem o valor total de ${valorCompra * 15 / 100}`)
}










