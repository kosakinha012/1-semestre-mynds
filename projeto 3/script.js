//algo que pode ser alterado
var nome = "davi";

//algo que pode ser alterado e muitas vezes e perdido
let idade = "13";
let altura = 1.80;

//algo que eu nao posso alterar
const cpf = "222.222.222-02"

numeroNormal = 2
numeroQuebrado = 2.3
textoNormal = "este e um texto normal"
textoComVariaveis = "este e um texto com crase e variavel${numeroNormal}"
vardadeiro = true;
falso = false;
objeto = {
    nome: "davi",
    idade: 13
};

var a = "1";
var b = 2;

console.log("a e igual a b tipagem", a == b);// false
console.log("a e igual a b tipagem", a === b);//false
console.log("a e diferente da b com a tipagem", a  !== b);//true
console.log("a e igual a d com a tipagem e sem a tipage", a != b)//true

var numero = 0;
function Cliquei() {
    numero++;
    console.log("CLIQUE AQUI")
    console.log(`${numero} vezes`)

}

const arrow = () => {
    console.log("sou uma arrow function")
    console.log("eu funciono igual uma funcao normal,oq muda e a forma")
}



//calcuradora 
const soma = (num1, num2) => {
    return num1, num2;

}

const resultado = Soma(10 +7)
console.log ("este e o resultado", resultado)