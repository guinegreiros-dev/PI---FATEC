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
    <h1>Lista de Pedidos</h1>
    <a class="btn btn primary" href="telaCadastroPedido.php" role="button">Novo Pedido</a>
    <br>
    <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>CNPJ</th>
            </tr>
        </thead>
        <tbody>
            <?php
                include("conexao.php");

                $sql = "SELECT * FROM `tb_pedidos`";
                $result = $conexao->query($sql);
            
                while($row = $result->fetch_assoc()){
                    echo"

                    <tr>
                    <td>$row[ID_PED]</td>
                    <td>$row[DESC_PED]</td>
                    <td>$row[DAT_PED]</td>
                    <td>
                        <a class='btn btn-primary btn-sm' href='/'>Editar</a>
                        <a class='btn btn-primary btn-sm' href='/'>Ver pedido</a>
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