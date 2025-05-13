// Constantes para configuração
const BUTTON_MARGIN = 20;
const ANIMATION_DURATION = 300;

// Elementos do DOM
const naoButton = document.getElementById('nao');
const simButton = document.getElementById('sim');
const respostaDiv = document.getElementById('resposta');

// Verificação de elementos
if (!naoButton || !simButton || !respostaDiv) {
    console.error('Elementos necessários não encontrados!');
    throw new Error('Elementos necessários não encontrados!');
}

// Função para gerar posição aleatória dentro dos limites da tela
function getRandomPosition() {
    const maxX = window.innerWidth - naoButton.offsetWidth - BUTTON_MARGIN;
    const maxY = window.innerHeight - naoButton.offsetHeight - BUTTON_MARGIN;
    
    return {
        x: Math.min(Math.max(BUTTON_MARGIN, Math.random() * maxX), maxX),
        y: Math.min(Math.max(BUTTON_MARGIN, Math.random() * maxY), maxY)
    };
}

// Função para mover o botão com animação suave
function moveButton() {
    const position = getRandomPosition();
    
    naoButton.style.transition = `all ${ANIMATION_DURATION}ms ease`;
    naoButton.style.left = `${position.x}px`;
    naoButton.style.top = `${position.y}px`;
}

// Eventos para o botão "Não"
naoButton.addEventListener('mouseover', moveButton);
naoButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

// Evento para o botão "Sim"
simButton.addEventListener('click', () => {
    try {
        respostaDiv.classList.remove('hidden');
        respostaDiv.classList.add('visible');
        
        // Adiciona confetes ou efeitos visuais aqui se desejar
    } catch (error) {
        console.error('Erro ao mostrar resposta:', error);
    }
});
