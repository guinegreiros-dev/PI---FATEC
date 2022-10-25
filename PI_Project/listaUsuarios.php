<!doctype html>
<html lang="br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css

">
  </head>
  <body>
    <div class="container my-5">
    <h1>Lista de Usuários</h1>
    <a class="btn btn primary" href="create.php" role="button">Novo Usuário</a>
    <br>
    <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome do Usuário</th>
                <th>Login</th>
                <th>Tipo do Usuário</th>

            </tr>
        </thead>
        <tbody>
            <?php
                include("conexao.php");

                $sql = "SELECT * FROM tb_usuarios, tb_tipo_usuarios WHERE FK_TB_TIPO_USUARIOS_ID_TIPO_USER = ID_TIPO_USER;";
                $result = $conexao->query($sql);

                while($row = $result->fetch_assoc()){
                    echo"

                    <tr>
                    <td>$row[ID_USER]</td>
                    <td>$row[NOME_USER]</td>
                    <td>$row[LOGIN_USER]</td>
                    <td>$row[NOME_TIPO_USER]</td>

                    <td>
                        <a class='btn btn-primary btn-sm' href='/'>Editar</a>
                        <a class='btn btn-danger btn-sm' href='/'>Inativar</a>
                    </td>
                </tr>

                    ";

                }

            ?>
        </tbody>
    </table>
    </div>
  </body>
</html>