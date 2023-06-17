const target1 = document.getElementById('target1');
const target2 = document.getElementById('target2');
const target3 = document.getElementById('target3');
const target4 = document.getElementById('target4');
const target5 = document.getElementById('target5');

alert('Não é minha culpa, é das..');

if(target1.addEventListener('targetFound')) {
    alert('Você acertou o primeiro livro! Vamos ver se conhece o resto!');
    alert('No Brasil me criei, quase padre me tornei, se minha esposa é fiel nunca saberei...');
}
// target1.addEventListener('targetFound', event => {
//     alert('Você acertou o primeiro livro! Vamos ver se conhece o resto!');
// });



target2.addEventListener('targetFound', event => {
    alert('Parece que temos alguém dos clássicos aqui... Seguiremos, então!')
})

alert('Trago o símbolo de Zeus na testa (n°7 da coleção)');

target3.addEventListener('targetFound', event => {
    alert('Ah, esse foi fácil, né? Vamos ver agora..')
})

alert(' Pode me encontrar em 1947, no esconderijo do  nº 263 de Prinsengracht');

target4.addEventListener('targetFound', event => {
    alert('Conseguiu pronunciar o nome? Ainda bem que não precisa! Vamos ao último...')
})

alert('Vivo no meu próprio mundinho, apenas eu e minha rosa...')

target5.addEventListener('targetFound', event => {
    alert('Parabéns! Diz aí, gostou? Eu sei que sim ;)')
})