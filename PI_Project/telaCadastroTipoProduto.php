<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width-device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous"></script>
        <title>Cadastro de Fornecedor</title>
        
    </head>
    <body>
    <button type="button" class="btn btn-danger p-1 m-1" onclick="window.location.href='options.php'">Voltar</button>
        <div class="container text-center pt-5 mb-5">
            <h1>Cadastrar Categoria</h1>
        </div>
        <div class="container text-center">
        <form action="cadastroCategoria.php" method="POST">
            <div class="row">
                <div class="col">
                    <div class="form-floating mb-3">
            <input class="form-control" type="text" name="nameCategoria" placeholder="Nome do fornecedor" required>
            <label for="">Nome da Categoria</label>
            </div>
            </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-floating mb-3">
            <input class="form-control" type="text" list="listOptionsValidate" onkeypress="return i.test(event.key)" name="temValidade" placeholder="CNPJ">
            <label for="">Possui validade?</label>
            </div>
            </div>
                <div class="col">
                    <div class="form-floating mb-3">
            <input class="form-control" type="text" name="quantidadeMinima" onkeypress="return /[0-9]/i.test(event.key)" maxlength="11" placeholder="CPF">
            <label for="">Quantidade mínima no estoque para o alerta</label>
            <div class="row">
                <div class="col">
                    <div class="form-floating mb-3">
            <input class="form-control" type="text" name="quantidadeDias" placeholder="Nome do fornecedor" required>
            <label for="">Quantidade de dias antes vencimento para definir o alerta</label>
            <datalist id="listOptionsValidate">
                    <option value="Sim">  
                    <option value="Não">
                </datalist>
            </div>
            </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-floating mb-3">
            </div>
            </div>
            </div>
            <div class="row">
                <div class="col">
                <input class="btn btn-primary" type="submit" value="Cadastrar">
                </div>
            </div>
        </form>

</div>
    </body>
</html>