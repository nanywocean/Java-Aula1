const motorista = {
    idade: 18,
    temCNH: true,
    temCarro: false
}

console.log(motorista)

//motorista.idade = motorista.idade + 1
//motorista.idade ++;
motorista.idade += 1;
motorista.temCNH = false;
motorista.temCarro = true;

console.log(motorista)



//------ Atividade 1 sobre objetos ----------


//01 - Dados de um produto
//Crie um objeto chamado produto com as propriedades nome, marca, preco e disponivel. Exiba separadamente o nome e o preço do produto no console.

const produto = {
    nomeObj: "Café",
    marcaObj: "Pelé",
    preçoObj: 21,
    disponível: true
}


console.log(produto.nomeObj)

produto.nomeObj = "Café"
produto.preçoObj = produto.preçoObj + 30

console.log(produto.preçoObj)



//--------- Laço de repetição -------

for (let contador = 0; contador <= 2; contador++) {
    console.log(contador)

}




//--------- Atividade de Laço de repetição -------



//02 - Tabuada
//Receba um número inteiro em uma variável e exiba sua tabuada de multiplicação de 1 a 10.


//for (let tabuada = 0; tabuada  <= 10; tabuada++) {
//  console.log(tabuada)
//}

let numero = 8;

for (let tabuada = 1; tabuada <= 20; tabuada++) {
    console.log(`${tabuada} x ${numero} = ${tabuada * numero}`)
}


let contador = 1;
let numeroWhile = 10;

while (contador <= 10) {
    console.log(contador * numeroWhile)
    contador++;
}



//---------- Atividade 2 de laços de repetição --------

//03 - Contagem Regressiva
//Exiba os números pares de 20 até 0, em ordem decrescente.



let number = 0

while (number > 0) {
    console.log(`while: ${number}`)
    number -= 2
}



let number2 = 0

do {
    console.log(`while: ${number2}`)
    number2 -= 2
} while (number2 > 0);



// ------ atividade 04 ------

//04 - Contagem Regressiva
//Exiba os números inteiros de 10 até 1 e, em seguida, a mensagem "Fim da contagem".




let numeros2 = 10;

do {
    console.log(numeros2)
    numeros2 -= 1
} while (numeros2 >= 1)
console.log("Fim da contagem.")


//   Listas

const frutas = ["Maçã", "Banana", "Uva", "Laranja"];

frutas[0] = "Pêra";

console.log(frutas);

console.log(frutas[0]);
console.log(frutas[2]);

console.log(frutas.length);

frutas.push("Manga, Mexerica");
console.log(frutas);


frutas.pop()
console.log(frutas)

frutas.sort()
console.log(frutas)

// Funções

function somar(numero1, numero2) {
    return numero1 + numero2;
}


const soma = somar(1, 1);

console.log(soma)

console.log(somar(6, 7));


function dividir(numero1, numero2) {
    console.log(`${numero1}/${numero2} = ${ numero1/numero2} `)
}
dividir(100,2)





// 01 — Adicionando elementos
// Crie uma lista chamada jogos com 3 jogos. Adicione mais 2 jogos ao final da lista e exiba o resultado no console.

const jogos = ["Braw Stars", "League of Legends", "The Sims"]

console.log(jogos)
console.log(jogos[0])
console.log(jogos[1])
console.log(jogos[2])

jogos.push("Free Fire", "Minecraft")

console.log(jogos[3])
console.log(jogos[4])

console.log(jogos)





// 02 — Removendo o último item
// Crie uma lista chamada materiais com 5 materiais escolares. Remova o último elemento e exiba a lista atualizada. Em seguida, exiba quantos elementos restaram.

const materiais = ["cola", "régua", "tesoura", "lápis", "caneta"]

console.log(materiais)

console.log(materiais[0])
console.log(materiais[1])
console.log(materiais[2])
console.log(materiais[3])
console.log(materiais[4])


materiais.pop()
console.log(materiais)






// 03 — Saudação personalizada
// Crie uma função chamada saudar que receba o nome de uma pessoa como parâmetro e exiba uma saudação contendo esse nome. Execute a função com dois nomes diferentes.



function saudar()



















// 04 — Calculando o dobro
// Crie uma função chamada dobro que receba um número, retorne o dobro desse valor e permita que o resultado seja exibido no console. Teste a função com três números diferentes.






