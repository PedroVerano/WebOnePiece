const botoes = document.querySelectorAll(".botao")
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, index) => {
    botao.addEventListener  ('click' , () => {
        const botaoselecionado = document.querySelector('.botao.selecionado');
        const personagemSelecionado = document.querySelector('.personagem.selecionado');
        const botaoindex = index;

        botaoselecionado.classList.remove('selecionado');
        botao.classList.add('selecionado');

        personagemSelecionado.classList.remove('selecionado');
        personagens[botaoindex].classList.add('selecionado');

    });
});





    