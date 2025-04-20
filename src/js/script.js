//Questão - 1
//Valor Undefined
// let exemplo;
// console.log(exemplo)

//Valor Nulo
// let exemplo1 = null;
// console.log(exemplo1)

//Com valor
// let exemplo2 = 1;
// console.log(exemplo2)

//Questão - 2

// const a = '30';
// const b = '30';
// const c = 30;
// const d = 10;
// console.log(a == b); //true (mesmo valor)
// console.log(a === b); //true (mesmo tipo e valor)
// console.log(a != b); //false (valores iguais entao não é diferente)
// console.log(a == c) //true (mesmo valor)
// console.log(a === c) //false (tipos diferentes)
// console.log(c >= d) //true (c é maior que d)
// console.log(c >= a) // true (maior OU igual)

//Questao 3
// let imc = parseFloat(prompt("Qual seu IMC?"));
// let categoria;

// if (imc < 18.5) {
//     categoria = "abaixo";
// } else if (imc >= 18.5 && imc <= 24.9) {
//     categoria = "ideal";
// } else {
//     categoria = "acima";
// }

// switch (categoria) {
//     case "abaixo":
//         console.log("Você está abaixo do ideal, vai ter que comer mais.");
//         break;
//     case "ideal":
//         console.log("Você está no peso ideal, tá tranquilo.");
//         break;
//     case "acima":
//         console.log("Você está acima do peso, emagreça.");
//         break;
//     default:
//         console.log("IMC inválido.");
// }


// Questao 4 






//Questão - 5
// let usuario = prompt("Digite o usuário: ")
// let senha = prompt("Digite a senha: ")

// if(usuario == "admin" && senha == "1234"){
//     console.log("Acesso liberado")
// }
// else{
//     console.log("PÁ! Acesso Negado!")
// }

//Questão - 6

// let cont = 1
// let soma = 0
// while(cont<=7){
//     let notas = parseInt(prompt("Digite a nota: "))
//     cont++
//     soma += notas
// }
// let media = soma / 7
// console.log(`A média das notas é: ${media}`)

// resultado = media >= 6 ? "Parabéns, você passou!" : "Você foi reprovado, vai estudar!"
// utilizando ternário


//Questão - 8
// const texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas"
// const em = texto.indexOf("em")
// const ia = texto.lastIndexOf("ia")
// const ciencia = texto.includes("ciência")
// const metodos = texto.includes("método")

// console.log("Primeira posição de 'em'", em)
// console.log("Última posição de 'ia'", ia)
// console.log("Palavra 'Ciência' encontrada?", ciencia)
// console.log("Palavra 'métodos' encontrada?", metodos)

// //Questão - 9
// let variavel = "1.23"
// variavel = parseFloat(variavel)
// console.log(variavel)
// console.log(typeof variavel)