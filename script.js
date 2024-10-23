const naoButton = document.getElementById('nao');
const simButton = document.getElementById('sim');
const respostaDiv = document.getElementById('resposta');

// Movimento do botão "não" no mouseover (PC) ou touchmove (mobile)
naoButton.addEventListener('mouseover', moveButton);
naoButton.addEventListener('touchstart', moveButton);

function moveButton() {
    const x = Math.random() * (window.innerWidth - naoButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - naoButton.offsetHeight);

    naoButton.style.left = `${x}px`;
    naoButton.style.top = `${y}px`;
}

// Ao clicar em "Sim", mostra a imagem do Floks e a mensagem
simButton.addEventListener('click', () => {
    respostaDiv.classList.remove('hidden');
    respostaDiv.classList.add('visible');
});
