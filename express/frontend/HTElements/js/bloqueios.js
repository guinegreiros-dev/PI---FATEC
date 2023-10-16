function checkAccess() {
    const userType = localStorage.getItem("userType");
    const fornecedores = document.getElementById("block1");
    const usuarios = document.getElementById("block2");
    const produtos = document.getElementById("block3");
    const pedidos = document.getElementById("block4");

    if (userType === "gerente") {
        fornecedores.style.display = "block";
        usuarios.style.display = "block";
        produtos.style.display = "block";
        pedidos.style.display = "block";

        // Habilitar os botões
        fornecedores.disabled = false;
        usuarios.disabled = false;
        produtos.disabled = false;
        pedidos.disabled = false;

    } else {
        fornecedores.style.display = "none";
        usuarios.style.display = "none";
        produtos.style.display = "none";
        pedidos.style.display = "none";

        // Desabilitar os botões
        fornecedores.disabled = true;
        usuarios.disabled = true;
        produtos.disabled = true;
        pedidos.disabled = true;
    }
}
