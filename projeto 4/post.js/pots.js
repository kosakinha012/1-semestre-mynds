async function cadastrarDados() {
    const name = document.getElementById("nome").value; // Captura o valor do campo nome
    const email = document.getElementById("email").value; // Captura o valor do campo email

    // Verifica se ambos os campos estão preenchidos
    if (!name || !email) {
        alert("Por favor, preencha todos os campos.");
        return; // Sai da função se os campos não estiverem preenchidos
    }

    // Prepara os dados para serem enviados
    const dados = { name, email };

    try {
        // Faz a requisição POST para a API do Firebase
        const resposta = await fetch(url, {
            method: 'POST', // Define o método como POST
            body: JSON.stringify(dados), // Converte os dados para JSON
            headers: {
                'Content-Type': 'application/json' // Define o tipo de conteúdo
            }
        });

        // Verifica se a resposta da requisição foi bem-sucedida
        if (!resposta.ok) {
            throw new Error(`Erro ao cadastrar: ${resposta.status}`);
        }

       
        document.getElementById("nome").value = '';
        document.getElementById("email").value = '';

        
        PegarDados();
    } catch (error) {
        console.error("Erro ao cadastrar:", error);
    }
}
