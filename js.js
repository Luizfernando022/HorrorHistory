function tuto(a, b, c, d, e, f) {
  return {
    a: a,
    b: b,
    c: c,
    d: d,
    e: e,
    função: f,
  };
}

let miojo = tuto(
  "Abrir a embalagem do miojo",
  "Retirar ele da embalagem",
  "Jogar o macarrão na agua fervendo",
  "Adicionar tempero quando o macarrão estiver mole",
  "Desligar depois de 5 minutos no cozinhando",
  tutorial
);

function tutorial() {
  let obj = this;
  setTimeout(() => {
    resultadoTutorial(obj.a);
  }, 1000);

  setTimeout(() => {
    resultadoTutorial(obj.b)
  }, 2000);
  setTimeout(() => {
    resultadoTutorial(obj.c)
  }, 3000);
  setTimeout(() => {
    resultadoTutorial(obj.d)
  }, 4000);
  setTimeout(() => {
    resultadoTutorial(obj.e)
  }, 5000);
}

function resultadoTutorial(a) {
  console.log(a);
}

miojo.função();

onload = () => {
  document.getElementById("canvas").style.height = "calc(100% + 100px)";
};

let animais = [
  (dog = {
    nome: "Cachorro",
    som: "Au Au",
    ações: [
      "Oi",
      "Olá",
      "Você é meu dono?",
      "Quem é você?",
      "Estou com fome...",
    ],
    ações2: [
      "...Você iria mesmo me deixar?",
      "Ei você, estou com fome",
      "Ei, você é surdo?",
      "Ei",
      "Ei, Você está bem?",
    ],
    funcao: falar,
    funcao2: falar2,
    props: animalProp,
  }),
  (gato = {
    nome: "Gato",
    som: "Miau",
    ações: [
      "Oi",
      "Olá",
      "Você é meu dono?",
      "Quem é você?",
      "Estou com fome...",
    ],
    ações2: [
      "...Você iria mesmo me deixar?",
      "Ei você, estou com fome",
      "Ei, você é surdo?",
      "Ei",
      "Ei, Você está bem?",
    ],
    funcao: falar,
    funcao2: falar2,
    props: animalProp,
  }),
];

function animalProp() {
  return {
    nome: this.nome,
    som: this.som,
    ações: this.ações,
    ações2: this.ações2,
  };
}

let legenda = document.getElementById("legenda");
let h1 = document.querySelectorAll("[width='titulo 1']")[0];
let h2 = document.querySelectorAll("[width='titulo 1']")[1];
let animal = document.getElementById("animal");
let nomeAnimal = "";
let som = "";
var nome = "";
let ações = "";
let props;

h1.addEventListener("click", () => {
  nomeAnimal = animais[parseInt(Math.random() * 2)];

  let animalProps = JSON.stringify(nomeAnimal.props());

  let props = JSON.parse(animalProps);
  let açõesString = JSON.stringify(props.ações);
  localStorage.setItem("nomeAnimal", props.nome);
  localStorage.setItem("somAnimal", props.som);
  localStorage.setItem("açõesAnimal", açõesString);

  let açõesJson = JSON.parse(localStorage.getItem("açõesAnimal"));
  nome = localStorage.getItem("nomeAnimal");
  som = localStorage.getItem("somAnimal");
  ações = açõesJson[parseInt(Math.random() * açõesJson.length)];

  nomeAnimal.funcao();
});

h2.addEventListener("click", () => {
  nomeAnimal = animais[parseInt(Math.random() * 2)];

  let animalProps = JSON.stringify(nomeAnimal.props());

  let props = JSON.parse(animalProps);
  let açõesString = JSON.stringify(props.ações2);
  localStorage.setItem("nomeAnimal", props.nome);
  localStorage.setItem("somAnimal", props.som);
  localStorage.setItem("açõesAnimal", açõesString);

  let açõesJson = JSON.parse(localStorage.getItem("açõesAnimal"));
  nome = localStorage.getItem("nomeAnimal");
  som = localStorage.getItem("somAnimal");
  ações = açõesJson[parseInt(Math.random() * açõesJson.length)];

  nomeAnimal.funcao2();
});

function falar() {
  legenda.innerHTML = `<h2>Então você pergunta: quem está aí?</h2>`;
  legenda.innerHTML += `<h2>tudo fica em silêncio,quando você olha para baixo e se depara com um ${nome}`;

  setTimeout(() => {
    legenda.innerHTML += `<div id="legendaAvanco">
    <div id="avancar"><img id="img1" class="img" src="./sources/icons8-seta-responder-30.png" alt=""></div>
    <div id="avancar"><img id="img2" class="img" src="./sources/icons8-seta-para-a-frente-30.png" alt=""></div>
  </div>`;
    document.getElementById("img2").addEventListener("click", parte1);
    document.getElementById("img1").addEventListener("click", voltar);
  }, 2000);

  animal.innerHTML = `<h2>${nome}: ${som} (${ações})</h2>`;
  h1.style.animationName = "saída";
  h2.style.animationName = "saída";
  setTimeout(() => {
    h1.style.display = "none";
    h2.style.display = "none";
  }, 2000);
  setTimeout(() => {
    animal.style.display = "flex";
    animal.style.animationName = "animal";
  }, 2000);
}
function voltar() {
  animal.style.left = "0px";
  animal.style.animationName = "animal2";

  setTimeout(() => {
    animal.style.display = "none";
    h1.style.display = "flex";
    h1.style.animationName = "saída2";
    h2.style.display = "flex";
    h2.style.animationName = "saída2";
    legenda.innerHTML = "<h2>Você ouve um barulho ao lado...</h2>";
    animal.style.animationName = "none";
    animal.style.left = "-100%";
  }, 1000);
}
function parte1() {
  legenda.innerHTML = `<h2>Você não sabe como, mas percebe que<br>consegue entender perfeitamente<br>oque aquele ${nome} está falando</h2>`;
  legenda.innerHTML += `<div id="legendaAvanco">
        <div id="avancar"><img id="img1" class="img" src="./sources/icons8-seta-responder-30.png" alt=""></div>
    </div>`;
  document.getElementById("img1").addEventListener("click", parte1Voltar);
}
function parte1Voltar() {
  falar();
}

function falar2() {
  legenda.innerHTML = `<h2>Então você ignora o barulho e segue em frente.</h2>`;
  legenda.innerHTML += `<h2>Enquanto você caminha para fora da velha casa abandonada<br> você escuta um barulho atrás de você<br> oque parece ser um ${nome}</h2>`;

  setTimeout(() => {
    legenda.innerHTML += `<div id="legendaAvanco">
  <div id="avancar"><img id="img1" class="img" src="./sources/icons8-seta-responder-30.png" alt=""></div>
  <div id="avancar"><img id="img2" class="img" src="./sources/icons8-seta-para-a-frente-30.png" alt=""></div>
  </div>`;

    document.getElementById("img2").addEventListener("click", parte1);
    document.getElementById("img1").addEventListener("click", voltar);
  }, 2000);

  animal.innerHTML = `<h2>${nome}: ${som} (${ações})</h2>`;
  h1.style.animationName = "saída";
  h2.style.animationName = "saída";
  setTimeout(() => {
    h1.style.display = "none";
    h2.style.display = "none";
  }, 2000);
  setTimeout(() => {
    animal.style.display = "flex";
    animal.style.animationName = "animal";
  }, 2000);
}
