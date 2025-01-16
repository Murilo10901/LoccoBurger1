document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os formulários da página
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o envio inicial do formulário

            let isValid = true;
            const inputs = form.querySelectorAll("input");

            // Valida cada campo do formulário
            inputs.forEach((input) => {
                if (input.value.trim() === "") {
                    isValid = false;
                    alert(`Por favor, preencha o campo: ${input.previousElementSibling.textContent}`);
                    input.focus();
                }
            });

            // Se tudo estiver correto, mostra mensagem de sucesso
            if (isValid) {
                alert("Tudo certo! Bora pro pedido!");
                form.submit(); // Envia o formulário
            }
        });
    });
});
