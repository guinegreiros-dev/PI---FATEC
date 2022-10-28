<?php

    include("conexao.php");

    $login= $_POST['loginUser'];
    $name= $_POST['nameUser'];
    $password= $_POST['password'];
    $type= $_POST['typeUser'];

    if($type == "Gerente"){

        echo $type = 1;
    }elseif ($type == "Funcionário") {

        echo $type = 2;
    }

    $sql="INSERT INTO `tb_usuarios`(`ID_USER`, `LOGIN_USER`, `NOME_USER`, `SENHA_USER`, `FK_TB_TIPO_USUARIOS_ID_TIPO_USER`) VALUES ('','$login','$name','$password','$type')";

    if(mysqli_query($conexao, $sql)){


        echo "Usuário cadastrado cadastrado";
    }else{
        echo "Erro";
    }
    mysqli_close($conexao);
?>