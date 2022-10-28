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
    <h1>Lista de Produtos</h1>
    <a class="btn btn primary" href="telaCadastroProduto.php" role="button">Novo Produto</a>
    <a class="btn btn primary" href="telaCadastroCategoria.php" role="button">Nova categoria</a>

    <br>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Produto</th>
                <th>Código de Barras</th>
                <th>Categoria</th>
            </tr>
        </thead>
        <tbody>
            <?php
                include("conexao.php");

                $sql = "SELECT * FROM `tb_produtos`, tb_categorias WHERE FK_TB_CATEGORIAS_ID_CATEGORIA = ID_CATEGORIA";
                $result = $conexao->query($sql);
            
                while($row = $result->fetch_assoc()){
                    echo"

                    <tr>
                    <td>$row[ID_PROD]</td>
                    <td>$row[DESC_PROD]</td>
                    <td>$row[COD_BARRA]</td>
                    <td>$row[NOME_CATEGORIA]</td>
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