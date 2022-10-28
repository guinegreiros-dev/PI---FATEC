<?php

    include("conexao.php");

    $nomeCategoria= $_POST['nameCategoria'];
    $temValidade= $_POST['temValidade'];
    $quantidadeMinima= $_POST['quantidadeMinima'];
    $quantidadeDias= $_POST['quantidadeDias'];

    if($temValidade == "Sim"){

        echo $temValidade = 1;
    }elseif ($temValidade == "Não") {

        echo $temValidade = 0;
    }

    $sql="INSERT INTO `tb_categorias`(`ID_CATEGORIA`, `NOME_CATEGORIA`, `TEM_VAL`, `DIAS_AVISO`, `QUANT_MINIMA`) VALUES ('','$nomeCategoria','$temValidade','$quantidadeDias','$quantidadeMinima')";
    
    if(mysqli_query($conexao, $sql)){

    
        echo "Categoria cadastrado";
    }else{
        echo "Erro";
    }
    mysqli_close($conexao);
?>

