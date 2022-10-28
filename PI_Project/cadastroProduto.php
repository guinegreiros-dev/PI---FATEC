<?php

    include("conexao.php");

    $descProduto= $_POST['descProduto'];
    $codBarra= $_POST['codBarra'];
    $categoria= $_POST['categoria'];

    if($categoria == "Arroz"){

        echo $categoria = 1;
    }elseif ($categoria == "Feijão") {

        echo $categoria = 2;
    }elseif ($categoria == "Vassoura") {

        echo $categoria = 3;
    }elseif ($categoria == "iogurte") {
        echo $categoria = 4;
    }

    $sql="INSERT INTO `tb_produtos`(`DESC_PROD`, `ID_PROD`, `COD_BARRA`, `FK_TB_CATEGORIAS_ID_CATEGORIA`) VALUES ('$descProduto','','$codBarra','$categoria')";

    if(mysqli_query($conexao, $sql)){


        echo "Produto cadastrado com sucesso";
    }else{
        echo "Erro";
    }
    mysqli_close($conexao);
?>