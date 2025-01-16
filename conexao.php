<?php
// Configurações de conexão com o banco de dados
$host = "localhost";        // Host do banco de dados, normalmente 'localhost' para servidores locais
$user = "root";             // Nome do usuário do banco de dados (padrão no XAMPP é 'root')
$password = "";             // Senha do usuário do banco de dados (padrão no XAMPP é vazio)
$dbname = "loccoburger";    // Nome do banco de dados (substitua pelo nome do seu banco)


// Criação da conexão com o banco de dados
$conexao = new mysqli($host, $user, $password, $dbname);

// Verifica se houve erro na conexão
if ($conexao->connect_error) {
    die("Erro de conexão: " . $conexao->connect_error);  // Exibe mensagem de erro se falhar
}
?>
