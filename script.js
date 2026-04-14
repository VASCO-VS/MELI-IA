
// Função para iniciar o chat do zero
function iniciarNovoChat() {
    const iframe = document.getElementById('chat-iframe');
    const botId = "3F1A51868A6023CF68240E09519A4D0F";
    
    // Geramos um número aleatório para "enganar" o cache do navegador
    const sessionId = Math.floor(Math.random() * 1000000);
    
    // Montamos a URL com o parâmetro de sessão
    // Nota: Verifique se o GPTMaker aceita '?session=' ou '?id=' 
    // O padrão universal para forçar nova conversa é adicionar um parâmetro v=id
    iframe.src = `https://app.gptmaker.ai/widget/${botId}/iframe?v=${sessionId}`;
}

// Chama a função assim que a página carregar
window.onload = iniciarNovoChat;

console.log("MELI-IA: Sistema de interface carregado com sucesso!");