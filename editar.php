<?php
// Conexão com o banco de dados
$conn = new mysqli('localhost', 'root', '', 'loccoburger');

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Obter o ID do produto
$id = $_GET['id'];

// Selecionar produto pelo ID
$sql = "SELECT * FROM produtos WHERE id = $id";
$result = $conn->query($sql);
$produto = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Produto - Loccoburger</title>
    <link rel="stylesheet" href="stylescontrole.css"> <!-- Opcional -->

</head>
<body>
    <h1>Editar Produto</h1>
    <form action="atualizar.php" method="post">
        <input type="hidden" name="id" value="<?php echo $produto['id']; ?>">
        <p>
            <label>Nome:</label>
            <input type="text" value="<?php echo $produto['nome']; ?>" disabled>
        </p>
        <p>
            <label>Quantidade em Estoque:</label>
            <input type="number" name="estoque" value="<?php echo $produto['estoque']; ?>">
        </p>
        <p>
            <label>Status:</label>
            <select name="ativo">
                <option value="1" <?php echo $produto['ativo'] ? 'selected' : ''; ?>>Ativo</option>
                <option value="0" <?php echo !$produto['ativo'] ? 'selected' : ''; ?>>Inativo</option>
            </select>
        </p>
        <p>
            <button type="submit">Salvar Alterações</button>
        </p>
    </form>
</body>
</html>

<?php
$conn->close();
?>
