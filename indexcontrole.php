<?php
// Conexão com o banco de dados
$conn = new mysqli('localhost', 'root', '', 'loccoburger');

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Selecionar produtos
$sql = "SELECT * FROM produtos";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciar Produtos - Loccoburger</title>
    <link rel="stylesheet" href="stylescontrole.css"> <!-- Opcional -->
</head>
<body>
    <h1>Lista de Produtos</h1>
    <table border="1" cellspacing="0" cellpadding="10">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Estoque</th>
                <th>Status</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <?php
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $status = $row['ativo'] ? 'Ativo' : 'Inativo';
                    echo "<tr>
                            <td>{$row['id']}</td>
                            <td>{$row['nome']}</td>
                            <td>{$row['descricao']}</td>
                            <td>R$ {$row['preco']}</td>
                            <td>{$row['estoque']}</td>
                            <td>{$status}</td>
                            <td><a href='editar.php?id={$row['id']}'>Editar</a></td>
                          </tr>";
                }
            } else {
                echo "<tr><td colspan='7'>Nenhum produto encontrado</td></tr>";
            }
            ?>
        </tbody>
    </table>
</body>
</html>

<?php
$conn->close();
?>
