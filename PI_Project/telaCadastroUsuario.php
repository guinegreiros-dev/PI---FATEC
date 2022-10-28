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
            <h1>Cadastrar Usuários</h1>
        </div>
        <div class="container text-center">
        <form action="cadastroUsuario.php" method="POST">
            <div class="row">
                <div class="col">
                    <div class="form-floating mb-3">
            <input class="form-control" type="text" name="loginUser" placeholder="Login do Usuário" required>
            <label for="">Login de acesso</label>
            </div>
            </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-floating mb-3">
            <input class="form-control" type="text" name="nameUser" maxlength="120" placeholder="Nome do usuário" required>
            <label for="">Nome do usuário</label>
            </div>
            </div>
                <div class="col">
                    <div class="form-floating mb-3">
            <input class="form-control" type="password" name="password" maxlength="64" placeholder="Senha" required>
            <label for="">Senha do usuário</label>
            </div>
            </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-floating mb-3">
                        <select class="form-select" id="typeUser" aria-label="Floating label select example" required>
                            <option selected value="2">Gerente</option>
                            <option value="3">Funcionário</option>
                        </select>
            <label for="type">Tipo do usuário</label>
            
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