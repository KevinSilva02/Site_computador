<?php
include "Produto.php";

$dados = Produto::ListarTodos();
$json = json_encode($dados);
header("Content-Type: application/json; charset=UTF-8 ");
echo $dados;