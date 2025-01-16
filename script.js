function openQuantityPopup(button) {
  // Recupera os dados do botão
  const name = button.getAttribute('data-name');
  const image = button.getAttribute('data-image');
  const description = button.getAttribute('data-description');

  // Atualiza o conteúdo do popup (se necessário)
  document.getElementById('item-name').textContent = name || 'Nome do Item';
  document.getElementById('item-image').src = image || '';
  document.getElementById('item-description').textContent = description || '';

  // Mostra o popup de quantidade
  const popup = document.getElementById('quantity-popup');
  popup.style.display = 'block';
}
function addToCartQuantity() {
  const quantity = document.getElementById('quantity-only');

  // Remove mensagens de erro existentes
  document.querySelectorAll('.error-message').forEach(msg => msg.remove());

  // Valida o campo de quantidade
  if (!quantity.value || quantity.value <= 0) {
      const error = document.createElement('span');
      error.textContent = 'Por favor, insira uma quantidade válida.';
      error.className = 'error-message';
      quantity.parentNode.appendChild(error);
      return; // Interrompe a execução se a validação falhar
  }

  // Se válido, exibe mensagem de sucesso (ou realiza ação)
  alert(`Quantidade ${quantity.value} adicionada ao carrinho!`);
  closeQuantityPopup(); // Fecha o popup após adicionar
}
function closeQuantityPopup() {
  const popup = document.getElementById('quantity-popup');
  popup.style.display = 'none';

  // Reinicia os campos e limpa mensagens de erro
  document.getElementById('quantity-only').value = '';
  document.querySelectorAll('.error-message').forEach(msg => msg.remove());
}
function closeQuantityPopup(button) {
  const name = button.getAttribute("data-name");
  const image = button.getAttribute("data-image");
  const description = button.getAttribute("data-description");

  const popup = document.getElementById("popup");
  popup.style.display = "flex"; // Mostra o popup apenas quando a função for chamada
  document.getElementById("item-image").src = image;
  document.getElementById("item-name").innerText = name;
  document.getElementById("item-description").innerText = description;
}
function closeQuantityPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none"; // Oculta o popup
  
}
function closeQuantityPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none'; // Oculta o popup

  // Reinicia os campos do formulário
  document.getElementById('quantity').value = '';
  document.getElementById('doneness').value = '';
  document.getElementById('remove-ingredient').value = '';

  // Remove mensagens de erro
  document.querySelectorAll('.error-message').forEach(msg => msg.remove());
}