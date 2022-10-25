<?php

    include("conexao.php");

    $fornecedor= $_POST['fornecedor'];
    $cnpj= $_POST['cnpj'];
    $cpf= $_POST['cpf'];
    $cep= $_POST['cep'];
    $endereco= $_POST['endereco'];
    $numeroEndereco= $_POST['numeroEndereco'];
    $telefone= $_POST['telefone'];
    $uf= $_POST['uf'];

    $sql="INSERT INTO tb_fornecedores(NOME_FORNE, CNPJ_FORNE, CPF_FORNE, CEP_FORNE, END_FORNE, NUM_END_FORNE, TELE_FORNE, ID_FORNE, UF_FORNE) 
    VALUES ('$fornecedor',$cnpj,$cpf,$cep,'$endereco',$numeroEndereco,$telefone,'','$uf')";
    
    if(mysqli_query($conexao, $sql)){

    
        echo "Fornecedor cadastrado";
    }else{
        echo "Erro";
    }
    mysqli_close($conexao);
?>

