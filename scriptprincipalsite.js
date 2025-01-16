function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu.style.left === "-50%") {
      sideMenu.style.left = "0";
    } else {
      sideMenu.style.left = "-50%";
    }
  }


// Função para carregar os dados do usuário do localStorage
function carregarDadosUsuario() {
  const userName = localStorage.getItem('userName');
  const userPhone = localStorage.getItem('userPhone');

  if (userName && userPhone) {
    document.getElementById('userInfo').innerText = `Olá, ${userName} - Telefone: ${userPhone}`;
  } else {
    document.getElementById('userInfo').innerText = "Bem-vindo, faça login para começar!";
  }
}

// Função para alternar o menu lateral
function toggleMenu() {
  const sideMenu = document.getElementById('sideMenu');
  sideMenu.classList.toggle('open');
}

// Função para fazer logout
function logout() {
  // Remove os dados do usuário do localStorage
  localStorage.removeItem('userName');
  localStorage.removeItem('userPhone');

  // Redireciona para a página de login
  window.location.href = 'login.html'; // Suponha que o arquivo de login seja 'login.html'
}

  // Simulação de login (substitua por lógica real no backend)
  const user = {
    isLoggedIn: false,
    name: "",
    phone: ""
  };

  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const userInfo = document.getElementById("userInfo");

  // Função para atualizar a interface com base no estado de login
  function updateUI() {
    if (user.isLoggedIn) {
      userInfo.textContent = `Olá, ${user.name} - Telefone: ${user.phone}`;
      loginBtn.style.display = "none"; // Esconde o botão Login
      logoutBtn.style.display = "inline-block"; // Mostra o botão Sair
    } else {
      userInfo.textContent = "Bem-vindo, faça login para começar!";
      loginBtn.style.display = "inline-block"; // Mostra o botão Login
      logoutBtn.style.display = "none"; // Esconde o botão Sair
    }
  }

 

  // Evento de clique no botão Sair
  logoutBtn.addEventListener("click", () => {
    user.isLoggedIn = false;
    user.name = "";
    user.phone = "";
    updateUI(); // Atualiza a interface
  });

 