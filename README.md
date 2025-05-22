💝 Pedido de Namoro Interativo
Um projeto web interativo e divertido para fazer um pedido de namoro de forma criativa. O botão "Não" foge do cursor do mouse, tornando a experiência mais divertida e desafiador para a pessoa recusar o pedido! Ao aceitar, uma chuva de fogos de artifício celebra o momento!

✨ Funcionalidades
*   Botão "Não" que foge do cursor do mouse, ficando mais difícil de clicar
*   Fundo com gradiente vermelho e padrão repetido de corações com transparência e overlay
*   Botões "Sim" e "Não" dourados com efeito de brilho
*   Efeito de fogos de artifício ao clicar no botão "Sim"
*   Design responsivo básico para desktop e mobile
*   Interface amigável e romântica
*   Compatível com a maioria dos navegadores modernos

🛠️ Tecnologias Utilizadas
*   HTML5
*   CSS3 (com variáveis CSS e animações)
*   JavaScript (Vanilla JS)
*   Biblioteca confetti-js para o efeito de fogos de artifício

🚀 Como Usar
1.  Clone este repositório:
    ```bash
    git clone https://github.com/4ndre-silva/pedido-namoro.git
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd pedido-namoro
    ```
3.  (Opcional) Crie a pasta para músicas, se desejar adicionar música de fundo no futuro:
    ```bash
    mkdir -p pedido-namoro-main/music
    ```
4.  Adicione a imagem de fundo de corações (por exemplo, `amar.png`) na pasta `pedido-namoro-main/images/`.
5.  Abra o arquivo `index.html` em seu navegador.

🎨 Personalização

**Cores e Gradiente de Fundo**
As cores principais e o gradiente de fundo podem ser facilmente alterados no arquivo `style.css` através das variáveis CSS:

```css
:root {
    --primary-color: #ff0000; /* Cor principal (vermelho) */
    --primary-hover: #cc0000; /* Cor principal ao passar o mouse */
    --secondary-color: #ffd700; /* Cor secundária (dourado) */
    --secondary-hover: #ffed4a; /* Cor secundária ao passar o mouse */
    --background-gradient: linear-gradient(135deg, #ff0000, #8b0000); /* Gradiente de fundo */
    --text-color: #ffffff; /* Cor do texto */
    /* Outras variáveis de tamanho/padding de botões */
}
```

**Imagem de Fundo de Corações**
Para alterar a imagem de fundo repetida, substitua o arquivo `pedido-namoro-main/images/amar.png` pela sua imagem de coração desejada. Você também pode ajustar o tamanho e a transparência no CSS:

```css
body::before {
    /* ... */
    background-image: url('images/sua_imagem_de_coracao.png'); /* Atualize o nome do arquivo aqui */
    background-size: 50px 50px; /* Ajuste o tamanho */
    opacity: 0.5; /* Ajuste a transparência */
    /* ... */
}

body::after {
    /* Ajuste a cor e a transparência do overlay */
    background: rgba(255, 0, 0, 0.2);
    /* ... */
}
```

**Textos**
Você pode modificar os textos principais no arquivo `index.html`:

```html
<h1>Quer namorar comigo?</h1>
<!-- ... -->
<p>Estamos namorando!</p>
```

**Imagem do Flork**
Para substituir a imagem do Flork, substitua o arquivo `pedido-namoro-main/images/flork.png` pela imagem que você preferir.

📱 Responsividade
O projeto inclui ajustes básicos para garantir que o conteúdo seja visualizado corretamente em diferentes tamanhos de tela, incluindo desktop e dispositivos móveis.

🤝 Contribuindo
Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

📝 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

👨‍💻 Autor
André Silva - @4ndre-silva

⭐ Agradecimentos
*   Inspiração para o design
*   Recursos utilizados (como a biblioteca confetti-js)
*   Contribuidores

Feito com �� por André Silva. 