const target1 = document.getElementById("target1");
const target2 = document.getElementById("target2");
const target3 = document.getElementById("target3");
const target4 = document.getElementById("target4");
const target5 = document.getElementById("target5");
const target6 = document.getElementById("target6");
const target7 = document.getElementById("target7");
const target8 = document.getElementById("target8");
const target9 = document.getElementById("target9");
const target10 = document.getElementById("target10");
let atual = 1; 

target1.addEventListener("targetFound", (event) => {
  atual = 2;
  alert("Você acertou o primeiro livro! Parece que conhece os clássicos..");
  alertas();
});

target2.addEventListener("targetFound", (event) => {
  atual = 3;
  alert("Ahh, essa era fácil, quero ver agora!");
  alertas();
});

target3.addEventListener("targetFound", (event) => {
  atual = 4;
  alert("Você conseguiu... Essa foi difícil né? Vamos à próxima!");
  alertas();
});

target4.addEventListener("targetFound", (event) => {
  atual = 5;
  alert(
    "Esse marcou tanto como livro quanto filme! Continue..."
  );
  alertas();
});

target5.addEventListener("targetFound", (event) => {
  atual = 6;
  alert("Aposto que você leu isso na escola! Vamos continuar");
  alertas();
});

target6.addEventListener("targetFound", (event) => {
    atual = 7;
    alert("Quem não conhece esse clássico! Agora, seguiremos...");
    alertas();
  });

target7.addEventListener("targetFound", (event) => {
    atual = 8;
    alert("Essa tava na cara, mas segue que já tá acabando...");
    alertas();
});
  
target8.addEventListener("targetFound", (event) => {
    atual = 9;
    alert("Conseguiu pronunciar o nome? Pega a próxima então: ");
    alertas();
});

target9.addEventListener("targetFound", (event) => {
    atual = 10;
    alert("Esse é o último, prometo! Vai lá...");
    alertas();
});
  
target10.addEventListener("targetFound", (event) => {
    atual = 11;
    alert("Parabéns! Diz aí, gostou? Eu sei que sim ;)");
    alertas();
});

function alertas() {
  if (atual == 1) {
    alert("Eu sou a arte da que teve a 1ª, a 2ª e a fria.");
  }
  if (atual == 2) {
    alert(
      "Não é minha culpa, é das..."
    );
  }
  if (atual == 3) {
    alert("Ao contrário de meu colega Dom Casmurro, eu me criei na europa. No meu país me chamam de “Az ajtó”)");
  }
  if (atual == 4) {
    alert(
        "Um quarteto chega a mim depois de atravessar um armário."
    );
  }
  if (atual == 5) {
    alert("No Brasil me criei, quase padre me tornei, se minha esposa é fiel nunca saberei.");
  }
  if(atual == 6) {
    alert("Ano que vem, a mãe de Bentinho fará 40 anos, o ano que ela nasceu eu levo na capa. (Ano atual 2023)")
  }
  if(atual == 7) {
    alert("Trago o símbolo de Zeus na testa (n°7 da coleção)")
  }
  if(atual == 8) {
    alert("Pode me encontrar em 1947, no esconderijo do  nº 263 de Prinsengracht.")
  }
  if(atual == 9) {
    alert("Eu tenho um marido para cada cor do arco-íris.")
  }
  if(atual == 10) {
    alert(" Vivo no meu próprio mundinho, apenas eu e minha rosa.")
  }
}

alertas();