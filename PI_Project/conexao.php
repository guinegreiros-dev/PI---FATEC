<?php 
$server = "localhost";
$usuario = "root";
$senha = "";
$dbname = "gestao_estoque";

$conexao = mysqli_connect($server, $usuario, $senha, $dbname);


if(!$conexao){

    die("Houve um erro: ".mysqli_connect_error());
}

?>