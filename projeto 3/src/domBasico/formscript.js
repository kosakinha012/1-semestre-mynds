var objetoPessoa = {};
var listadePessoa = [];

function ValoresForm(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    objetoPessoa = {
        nome,
        idade,
        email,
        telefone
    }

    console.log("Pessoa cadastrada", objetoPessoa);

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    
    listadePessoa.push(objetoPessoa);

    alert(`Pessoa cadastrada com sucesso, Bem vindo ${objetoPessoa.nome}`)


}
function pessoasCadastradas() {
    console.log(`A lista tem ${listadePessoa} pessoas`);

    listadePessoa.map((pessoa, positionNaLista) => {
        console.log(`A ${positionNaLista + 1}º pessoas e a:`);

        console.log(listadePessoa[positionNaLista].nome);

        console.log(`tem ${pessoa.idade} anos`);

        console.log(`e seu contato e: ${pessoa.telefone}`);


    })
}