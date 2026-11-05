// Função de Alto Contraste
function ToggleContrast() {
    document.body.classList.toggle('high-contrast');
    showToast(document.body.classList.contains('high-contrast') ? "Alto contraste ativado" : "Modo normal ativado");
}

// Função de Alterar Tamanho da Fonte
let currentFontSize = 16;
function ChangeFontSize(delta) {
    currentFontSize = Math.min(Math.max(12, currentFontSize + delta), 22);
    document.documentElement.style.setProperty('--base-font-size', currentFontSize + 'px');
    showToast("Tamanho do texto: " + currentFontSize + "px");
}

// Simulação de Assinatura de Plano
function assinarPlano(plano) {
    showToast("Você selecionou o Plano " + plano + "! Redirecionando...");
}

// Envio de Formulário
function handleFormSubmit(event) {
    event.preventDefault();
    showToast("Mensagem enviada com sucesso!");
    event.target.reset();
}

// Exibir Notificação Toast Customizada
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}