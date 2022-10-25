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
    <h1>Lista de fornecedores</h1>
    <a class="btn btn primary" href="create.php" role="button">Novo Fornecedor</a>
    <br>
    <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>CNPJ</th>
                <th>CPF</th>
                <th>CEP</th>
                <th>Endereço</th>
                <th>Nº</th>
                <th>UF</th>
                <th>Telefone</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <?php
                include("conexao.php");

                $sql = "SELECT * FROM tb_fornecedores";
                $result = $conexao->query($sql);

                while($row = $result->fetch_assoc()){
                    echo"

                    <tr>
                    <td>$row[ID_FORNE]</td>
                    <td>$row[NOME_FORNE]</td>
                    <td>$row[CNPJ_FORNE]</td>
                    <td>$row[CPF_FORNE]</td>
                    <td>$row[CEP_FORNE]</td>
                    <td>$row[END_FORNE]</td>
                    <td>$row[NUM_END_FORNE]</td>
                    <td>$row[UF_FORNE]</td>
                    <td>$row[TELE_FORNE]</td>
                    <td>$row[status]</td>
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