<!DOCTYPE html>
<html lang="br">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">
</head>
<body>
    <div class="container my-5">
        <h2>Novo Fornecedor</h2>
        <form action="cadastroFornecedor.php" method="post">
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label">Nome do fornecedor</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" name="fornecedor" value="">
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label">CNPJ</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" name="cnpj" value="">
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label">CPF</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" name="cpf" value="">
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label">CEP</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" name="cep" value="">
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label">Endereço</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" name="endereco" value="">
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label">Nº</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" name="numeroEndereco" value="">
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label">Telefone com DDD</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" name="telefone" value="">
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label">UF</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" name="uf" value="">
                </div>
            </div>

            <div class="row mb-3">
                <div class="offset-sm-3 col-sm-3 d-grid">
                    <button type="submit" class="btn btn-primary">Cadastrar</button>
                </div>
                <div class="col-sm-3 d-grid">
                    <a class="btn btnc-outline-primary" href="listaFornecedores.php" role="button">Cancelar</a>
                </div>
            </div>
        </form>
    </div>
</body>
</html>