const url = "https://mynds-crud-toturial-default-rtdb.firebaseio.com/pessoas.json";

async function PegarDados() {
    try {
        const resultado = await fetch(url);
        if (!resultado.ok) {
            throw new Error(`Erro na requisição: ${resultado.status}`);
        }

        const resultadoConvertido = await resultado.json();
        console.log(resultadoConvertido);

        if (!resultadoConvertido || Object.keys(resultadoConvertido).length === 0) {
            throw new Error("Nenhum dado válido foi retornado pela API");
        }

        const arr = Object.entries(resultadoConvertido).map(([id, value]) => ({ id, ...value }));

        function gerarTableRows(array) {
            return array.map((item, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name || 'Sem nome'}</td>
                    <td>${item.email || 'Sem email'}</td>
                    <td>${item.id}</td>
                    <td><button class="edit-btn">Editar</button></td>
                    <td><button class="delete-btn">Deletar</button></td>
                </tr>
            `).join('');
        }

        const tableBody = document.getElementById("tbody");
        tableBody.innerHTML = gerarTableRows(arr);

    } catch (error) {
        console.error("Erro ao buscar ou processar os dados:", error);
    }
}

async function cadastrarDados() {
    const name = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Por Favor, preencha todos os campos.");
        return;
    }

    const dados = { name, email };

    try {
        const resposta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(dados),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!resposta.ok) {
            throw new Error(`Erro ao cadastrar: ${resposta.status}`);
        }

        // Limpar os campos após cadastro
        document.getElementById("nome").value = '';
        document.getElementById("email").value = '';

        PegarDados();
    } catch (error) {
        console.error("Erro ao cadastrar:", error);
    }
}

// Chama a função PegarDados ao carregar a página
window.onload = PegarDados;
