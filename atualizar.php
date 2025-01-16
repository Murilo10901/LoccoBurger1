<?php
// Conexão com o banco de dados
$conn = new mysqli('localhost', 'root', '', 'loccoburger');

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Obter dados do formulário
$id = $_POST['id'];
$estoque = $_POST['estoque'];
$ativo = $_POST['ativo'];

// Atualizar produto no banco
$sql = "UPDATE produtos SET estoque = $estoque, ativo = $ativo WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo "Produto atualizado com sucesso! <a href='indexcontrole.php'>Voltar para a lista</a>";
} else {
    echo "Erro ao atualizar produto: " . $conn->error;
}

$conn->close();
?>
