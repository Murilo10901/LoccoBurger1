document.getElementById('deliveryForm').addEventListener('submit', function (e) {
    const telefone = document.getElementById('telefone').value;
    const cep = document.getElementById('cep').value;
  
    if (isNaN(telefone) || isNaN(cep)) {
      e.preventDefault();
      alert('Por favor, insira apenas números nos campos Telefone e CEP.');
    }
  });
  