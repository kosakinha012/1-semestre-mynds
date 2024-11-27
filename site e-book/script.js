// Função de compra com dados do eBook selecionado
function comprar(nome, descricao, preco) {
    // Redireciona para a seção de pagamento
    window.location.href = "#purchase";

    // Preenche o formulário com os dados do eBook selecionado
    document.getElementById("ebook-nome").innerText = nome;
    document.getElementById("ebook-descricao").innerText = descricao;
    document.getElementById("ebook-preco").innerText = preco;

    // Define o valor do eBook selecionado no campo oculto para envio
    document.getElementById("ebook-selecionado").value = nome;
}

// Submissão do formulário de pagamento
document.getElementById("payment-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cartao = document.getElementById("cartao").value;
    const ebookSelecionado = document.getElementById("ebook-selecionado").value;

    alert(`Obrigado pela compra do ${ebookSelecionado}, ${nome}! Um email de confirmação foi enviado para ${email}.`);
    // Aqui você integraria com um sistema de pagamento real
});