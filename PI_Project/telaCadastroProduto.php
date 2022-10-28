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
            <h1>Cadastrar Produto</h1>
        </div>
        <div class="container text-center">
        <form action="cadastroProduto.php" method="POST">
            <div class="row">
                <div class="col">
                    <div class="form-floating mb-3">
            <input class="form-control" type="text" name="descProduto" placeholder="Descrição do produto" required>
            <label for="">Descrição do produto</label>
            </div>
            </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-floating mb-3">
            <input class="form-control" type="text" onkeypress="return /[0-9]/i.test(event.key)" name="codBarra" placeholder="codBarra" maxlength="13">
            <label for="">Código de Barra</label>
            </div>
            </div>
                <div class="col">
                    <div class="form-floating mb-3">
            <select class="form-select" name="categoria">
                    <option value="Arroz">Arroz  
                    <option value="Feijão">Feijão
                    <option value="Vassoura">Vassoura
                    <option value="iogurte">Iogurte
                    </select>
                    <label for="">Categoria</label>
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