/**
 * Função para enviar uma pergunta sugerida diretamente para o Chatbot
 */
function enviarSugestao(texto) {
    const iframe = document.getElementById('chat-iframe');
    const botId = "3F1A51868A6023CF68240E09519A4D0F";
    
    // Recupera o ID da sessão que foi gerado no carregar da página
    const currentSession = sessionStorage.getItem('meli_user_session');
    
    // Mantém o mesmo user_id para que a pergunta apareça na mesma conversa atual
    const urlFormatada = `https://app.gptmaker.ai/widget/${botId}/iframe?user_id=${currentSession}&message=${encodeURIComponent(texto)}`;
    
    iframe.src = urlFormatada;
    console.log("MELI-IA processando sugestão: " + texto);
}

/**
 * Função responsável por carregar o chat com uma identidade nova
 */
function iniciarNovoChat() {
    const iframe = document.getElementById('chat-iframe');
    const botId = "3F1A51868A6023CF68240E09519A4D0F";
    
    // Geramos um ID aleatório único para identificar este "novo usuário"
    // Usamos Math.random e Date.now para garantir que nunca se repita
    const novoUsuarioId = "user_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
    
    // Salva no sessionStorage para que as sugestões funcionem na aba aberta
    sessionStorage.setItem('meli_user_session', novoUsuarioId);
    
    // O parâmetro 'user_id' força o GPTMaker a criar um histórico novo para este ID
    iframe.src = `https://app.gptmaker.ai/widget/${botId}/iframe?user_id=${novoUsuarioId}`;
}

// Garante que um novo chat seja iniciado toda vez que a página abrir ou der F5
window.onload = iniciarNovoChat;

/* ==========================================================
   LÓGICA DE ALTERNÂNCIA DE TEMA (DARK/LIGHT MODE)
   ========================================================== */

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.documentElement; 

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});