//Varaveis do jogo
//canvas e ctx - contexto
//Altura e largura - capturar tamanho da tela
//frames

var canvas,
  ctx,
  altura,
  largura,
  frames = 0,
  velocidade = 3,
  recorde = 0;

var estadoAtual;

var estados = {
  jogar: 0,
  jogando: 1,
  configurando: 2,
  pausado: 3,
  perdeu: 4,
};

var mousePosX,
  mousePosY,
  dificuldade = 1;

const startImg = new Image();
startImg.src = "./image/start.png";
const facilImg = new Image();
facilImg.src = "./image/nivelFacilImg.png";
const medioImg = new Image();
medioImg.src = "./image/nivelMedioImg.png";
const dificilImg = new Image();
dificilImg.src = "./image/nivelDificilImg.png";
const pausaImg = new Image();
pausaImg.src = "./image/pausa.png";
const pausaBtnImg = new Image();
pausaBtnImg.src = "./image/pausaBtn.png";
const reiniciarImg = new Image();
reiniciarImg.src = "./image/reiniciarImg.png";
const alvoImg = new Image();
alvoImg.src = "./image/alvo.png";
const luzinhas = new Image();
luzinhas.src = "./image/luzinhas.png";
const logo = new Image();
logo.src = "./image/softShotLogo.png";
const tristeImg = new Image();
tristeImg.src = "./image/triste.png";

const ursinho1 = new Image();
ursinho1.src = "./image/ursinho.png";

const ursinho2 = new Image();
ursinho2.src = "./image/urso-teddy.png";

const unicornio = new Image();
unicornio.src = "./image/unicornio.png";

const foguete = new Image();
foguete.src = "./image/foguete.png";

const cavalinho = new Image();
cavalinho.src = "./image/cavalinho.png";

const dinossauro = new Image();
dinossauro.src = "./image/dinossauro.png";

const yoyo = new Image();
yoyo.src = "./image/yoyo.png";

const carrinho = new Image();
carrinho.src = "./image/carrinho.png";

const pipa = new Image();
pipa.src = "./image/pipa.png";

const trem = new Image();
trem.src = "./image/trem.png";

const barco = new Image();
barco.src = "./image/barco.png";

const origami = new Image();
origami.src = "./image/origami.png";

//imagem para trocar
const ursinho11 = new Image();
ursinho11.src = "./image/ursinho+1.png";

const ursinho21 = new Image();
ursinho21.src = "./image/urso-teddy+1.png";

const unicornio1 = new Image();
unicornio1.src = "./image/unicornio+1.png";

const foguete1 = new Image();
foguete1.src = "./image/foguete+1.png";

const cavalinho1 = new Image();
cavalinho1.src = "./image/cavalinho+1.png";

const dinossauro1 = new Image();
dinossauro1.src = "./image/dinossauro+1.png";

const yoyo1 = new Image();
yoyo1.src = "./image/yoyo+1.png";

const carrinho1 = new Image();
carrinho1.src = "./image/carrinho+1.png";

const pipa1 = new Image();
pipa1.src = "./image/pipa+1.png";

const trem1 = new Image();
trem1.src = "./image/trem+1.png";

const barco1 = new Image();
barco1.src = "./image/barco+1.png";

const origami1 = new Image();
origami1.src = "./image/origami+1.png";

const ursinho1P = new Image();
ursinho1P.src = "./image/ursinhoP.png";

const ursinho2P = new Image();
ursinho2P.src = "./image/urso-teddyP.png";

const unicornioP = new Image();
unicornioP.src = "./image/unicornioP.png";

const fogueteP = new Image();
fogueteP.src = "./image/fogueteP.png";

const cavalinhoP = new Image();
cavalinhoP.src = "./image/cavalinhoP.png";

const dinossauroP = new Image();
dinossauroP.src = "./image/dinossauroP.png";

const yoyoP = new Image();
yoyoP.src = "./image/yoyoP.png";

const carrinhoP = new Image();
carrinhoP.src = "./image/carrinhoP.png";

const pipaP = new Image();
pipaP.src = "./image/pipaP.png";

const tremP = new Image();
tremP.src = "./image/tremP.png";

const barcoP = new Image();
barcoP.src = "./image/barcoP.png";

const origamiP = new Image();
origamiP.src = "./image/origamiP.png";

//obj para criar chao
var chao = {
  y: 250,
  altura: 35,
  cor: "#3e2711",

  desenhar: function () {
    ctx.fillStyle = this.cor;
    ctx.fillRect(0, this.y, largura, this.altura);

    ctx.drawImage(luzinhas, 0, this.y + 20, largura, 80);
  },
};

var chao2Linha = {
  y: 190,
  altura: 35,
  cor: "#26180a",

  desenhar: function () {
    ctx.fillStyle = this.cor;
    ctx.fillRect(0, this.y, largura, this.altura);

    ctx.drawImage(logo, 120, 20, 380, 70);
  },
};

var bancada = {
  y: 400,
  altura: 530,
  cor: "#3b2928",

  desenhar: function () {
    ctx.fillStyle = this.cor;
    ctx.fillRect(0, this.y, largura, this.altura);

    ctx.fillStyle = "#705f5e";
    ctx.fillRect(0, 400, largura, 20);
    //borda sombra inferior
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 420, largura, 2);

    //barras - x,y,largura,altura
    ctx.fillStyle = "#705f5e";
    ctx.fillRect(10, 400, 20, 530);
    ctx.fillRect(70, 400, 20, 530);
    ctx.fillRect(130, 400, 20, 530);
    ctx.fillRect(190, 400, 20, 530);
    ctx.fillRect(250, 400, 20, 530);
    ctx.fillRect(310, 400, 20, 530);
    ctx.fillRect(370, 400, 20, 530);
    ctx.fillRect(430, 400, 20, 530);
    ctx.fillRect(490, 400, 20, 530);
    ctx.fillRect(550, 400, 20, 530);
  },
};

var recursos = {
  score: 0,
  countErros: 0,
  reset: function () {
    this.score = 0;
    this.countErros = 0;
  },
  desenhar: function () {
    ctx.fillStyle = "#fff";
    ctx.font = "18px Poppins";
    ctx.fillText("Pontuação: " + this.score, 20, 40);
    ctx.fillText("Recorde: " + recorde, 20, 55);
    ctx.fillText("Erros: " + this.countErros, 20, 70);

    ctx.drawImage(pausaBtnImg, 550, 20, 30, 30);
  },
};

var alvos = {
  _alvo: [],
  fotos: [
    ursinho1,
    ursinho2,
    unicornio,
    foguete,
    cavalinho,
    dinossauro,
    yoyo,
    carrinho,
    pipa,
    trem,
    barco,
    origami,
  ],
  fotosIndisponivel: [
    ursinho11,
    ursinho21,
    unicornio1,
    foguete1,
    cavalinho1,
    dinossauro1,
    yoyo1,
    carrinho1,
    pipa1,
    trem1,
    barco1,
    origami1,
  ],
  fotosBloqueado: [
    ursinho1P,
    ursinho2P,
    unicornioP,
    fogueteP,
    cavalinhoP,
    dinossauroP,
    yoyoP,
    carrinhoP,
    pipaP,
    tremP,
    barcoP,
    origamiP,
  ],
  tempoInsere: 0,
  insere: function () {
    var index = Math.floor(Math.random() * 12);
    var bloq = Math.round(Math.random() * 1);

    this._alvo.push({
      x: largura,
      largura: 60, //30 + Math.floor(20 * Math.random()),
      altura: 60,
      imagem: this.fotos[index],
      imagemIndisponivel: this.fotosIndisponivel[index],
      imagemBloqueado: this.fotosBloqueado[index],
      disponivel: true,
      bloqueado: bloq,
    });

    if (dificuldade == 1)
      this.tempoInsere = 30 + Math.floor(170 * Math.random());
    else if (dificuldade == 2)
      this.tempoInsere = 20 + Math.floor(120 * Math.random());
    else if (dificuldade == 3)
      this.tempoInsere = 10 + Math.floor(80 * Math.random());
  },
  atualizar: function () {
    if (this.tempoInsere == 0) {
      this.insere();
    } else {
      this.tempoInsere--;
    }

    for (var i = 0, tam = this._alvo.length; i < tam; i++) {
      var alvo = this._alvo[i];
      //mudando a posição do alvo
      alvo.x -= velocidade;
      if (alvo.x <= -alvo.largura) {
        this._alvo.splice(i, 1);
        //corrige o problema de acessar uma posi n exstente dps de tirar
        tam--;
        i--;
      }
    }
  },
  checkColisao: function () {
    for (var i = 0, tam = this._alvo.length; i < tam; i++) {
      var alvo = this._alvo[i];
      if (
        mousePosX > alvo.x &&
        mousePosX < alvo.x + alvo.largura &&
        mousePosY > chao.y - alvo.altura &&
        mousePosY < chao.y &&
        alvo.disponivel
      ) {
        alvo.disponivel = false;
        if (alvo.bloqueado == 1) {
          recursos.countErros++;
        } else {
          recursos.score++;
        }

        var audioAcertou = document.getElementById("tiroCerto");
        audioAcertou.currentTime = 0;
        audioAcertou.play();

        if (recursos.score > recorde) recorde = recursos.score;
      } else {
        var audioErrou = document.getElementById("tiroErrado");
        audioErrou.currentTime = 0;
        audioErrou.play();
      }
    }
  },
  limpa: function () {
    this._alvo = [];
  },
  desenhar: function () {
    for (var i = 0, tam = this._alvo.length; i < tam; i++) {
      var alvo = this._alvo[i];

      if (alvo.bloqueado == 1) {
        ctx.drawImage(
          alvo.imagemBloqueado,
          alvo.x,
          chao.y - alvo.altura,
          alvo.largura,
          alvo.altura
        );
      } else {
        if (alvo.disponivel) {
          ctx.drawImage(
            alvo.imagem,
            alvo.x,
            chao.y - alvo.altura,
            alvo.largura,
            alvo.altura
          );
        } else {
          ctx.drawImage(
            alvo.imagemIndisponivel,
            alvo.x,
            chao.y - alvo.altura,
            alvo.largura,
            alvo.altura
          );
        }
      }
    }
  },
};

var alvos2Linha = {
  _alvo: [],
  fotos: [
    ursinho1,
    ursinho2,
    unicornio,
    foguete,
    cavalinho,
    dinossauro,
    yoyo,
    carrinho,
    pipa,
    trem,
    barco,
    origami,
  ],
  fotosIndisponivel: [
    ursinho11,
    ursinho21,
    unicornio1,
    foguete1,
    cavalinho1,
    dinossauro1,
    yoyo1,
    carrinho1,
    pipa1,
    trem1,
    barco1,
    origami1,
  ],
  fotosBloqueado: [
    ursinho1P,
    ursinho2P,
    unicornioP,
    fogueteP,
    cavalinhoP,
    dinossauroP,
    yoyoP,
    carrinhoP,
    pipaP,
    tremP,
    barcoP,
    origamiP,
  ],
  tempoInsere: 0,
  insere: function () {
    var index = Math.floor(Math.random() * 12);
    var bloq = Math.round(Math.random() * 1);

    this._alvo.push({
      x: 0,
      largura: 60, //30 + Math.floor(20 * Math.random()),
      altura: 60,
      imagem: this.fotos[index],
      imagemIndisponivel: this.fotosIndisponivel[index],
      imagemBloqueado: this.fotosBloqueado[index],
      disponivel: true,
      bloqueado: bloq,
    });

    if (dificuldade == 1)
      this.tempoInsere = 30 + Math.floor(170 * Math.random());
    else if (dificuldade == 2)
      this.tempoInsere = 20 + Math.floor(120 * Math.random());
    else if (dificuldade == 3)
      this.tempoInsere = 10 + Math.floor(80 * Math.random());
  },
  atualizar: function () {
    if (this.tempoInsere == 0) {
      this.insere();
    } else {
      this.tempoInsere--;
    }

    for (var i = 0, tam = this._alvo.length; i < tam; i++) {
      var alvo = this._alvo[i];
      //mudando a posição do alvo
      alvo.x += velocidade;
      if (alvo.x >= largura) {
        this._alvo.splice(i, 1);
        //corrige o problema de acessar uma posi n exstente dps de tirar
        tam--;
        i--;
      }
    }
  },
  checkColisao: function () {
    for (var i = 0, tam = this._alvo.length; i < tam; i++) {
      var alvo = this._alvo[i];
      if (
        mousePosX > alvo.x &&
        mousePosX < alvo.x + alvo.largura &&
        mousePosY > chao2Linha.y - alvo.altura &&
        mousePosY < chao2Linha.y &&
        alvo.disponivel
      ) {
        alvo.disponivel = false;
        if (alvo.bloqueado == 1) {
          recursos.countErros++;
        } else recursos.score++;

        var audioAcertou = document.getElementById("tiroCerto");
        audioAcertou.currentTime = 0;
        audioAcertou.play();

        if (recursos.score > recorde) recorde = recursos.score;
      } else {
        var audioErrou = document.getElementById("tiroErrado");
        audioErrou.currentTime = 0;
        audioErrou.play();
      }
    }
  },
  limpa: function () {
    this._alvo = [];
  },
  desenhar: function () {
    for (var i = 0, tam = this._alvo.length; i < tam; i++) {
      var alvo = this._alvo[i];
      if (alvo.bloqueado == 1) {
        ctx.drawImage(
          alvo.imagemBloqueado,
          alvo.x,
          chao2Linha.y - alvo.altura,
          alvo.largura,
          alvo.altura
        );
      } else {
        if (alvo.disponivel) {
          ctx.drawImage(
            alvo.imagem,
            alvo.x,
            chao2Linha.y - alvo.altura,
            alvo.largura,
            alvo.altura
          );
        } else {
          ctx.drawImage(
            alvo.imagemIndisponivel,
            alvo.x,
            chao2Linha.y - alvo.altura,
            alvo.largura,
            alvo.altura
          );
        }
      }
    }
  },
};

var mouse = {
  x: 0,
  y: 0,
  radius: 180,
  desenhar: function () {
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(mousePosX, mousePosY, this.radius, 0, 2 * Math.PI);
    ctx.rect(largura, 0, -largura, altura);
    ctx.fill();

    //desenha um alvo
    ctx.drawImage(alvoImg, mousePosX - 25, mousePosY - 25, 50, 50);
  },
};

function main() {
  //capturar altura e largura da tela
  altura = window.innerHeight;
  largura = window.innerWidth;

  if (largura > 500) {
    largura = 600;
    altura = 600;
  }

  canvas = document.createElement("canvas");
  canvas.height = altura;
  canvas.width = largura;
  canvas.style.border = "2px solid #000";
  canvas.style.marginTop = "2rem";
  ctx = canvas.getContext("2d");

  document.body.appendChild(canvas);
  document.addEventListener("mousedown", click);
  canvas.addEventListener("mousemove", function (e) {
    const rect = canvas.getBoundingClientRect();
    mousePosX = e.clientX - rect.left;
    mousePosY = e.clientY - rect.top;
  });
  estadoAtual = estados.jogar;
  rodar();
}

//identifica se houve click
function click() {
  if (estadoAtual == estados.jogando) {
    // verifica se ta clicando para pausar
    if (
      mousePosX > 550 &&
      mousePosX < 580 &&
      mousePosY > 30 &&
      mousePosY < 60
    ) {
      estadoAtual = estados.pausado;
    } else {
      alvos.checkColisao();
      alvos2Linha.checkColisao();

      if (recursos.countErros == 5) estadoAtual = estados.perdeu;
    }
  } else if (estadoAtual == estados.jogar) {
    estadoAtual = estados.configurando;
  } else if (estadoAtual == estados.configurando) {
    console.log(mousePosX);
    console.log(largura);
    console.log(largura / 2);

    if (
      mousePosX > largura / 2 - 80 &&
      mousePosX < largura / 2 - 80 + 150 &&
      mousePosY > altura / 2 - 90 &&
      mousePosY < altura / 2 - 90 + 60
    ) {
      dificuldade = 1;
      mouse.radius = 150;
      estadoAtual = estados.jogando;
    } else if (
      mousePosX > largura / 2 - 80 &&
      mousePosX < largura / 2 - 80 + 150 &&
      mousePosY > altura / 2 - 20 &&
      mousePosY < altura / 2 - 20 + 60
    ) {
      dificuldade = 2;
      mouse.radius = 90;
      estadoAtual = estados.jogando;
    } else if (
      mousePosX > largura / 2 - 80 &&
      mousePosX < largura / 2 - 80 + 150 &&
      mousePosY > altura / 2 + 50 &&
      mousePosY < altura / 2 + 50 + 60
    ) {
      dificuldade = 3;
      mouse.radius = 40;
      estadoAtual = estados.jogando;
    }
  } else if (estadoAtual == estados.pausado) {
    if (
      mousePosX > largura / 2 - 75 &&
      mousePosX < largura / 2 - 75 + 150 &&
      mousePosY > altura / 2 + 120 &&
      mousePosY < altura / 2 + 120 + 50
    ) {
      //se clicou em reiniciar, limpa os alvos
      alvos.limpa();
      alvos2Linha.limpa();
      //limpa pontuação
      recursos.reset();
      //volta pra jogar
      estadoAtual = estados.jogar;
    } else {
      estadoAtual = estados.jogando;
    }
  } else if (estadoAtual == estados.perdeu) {
    if (
      mousePosX > largura / 2 - 75 &&
      mousePosX < largura / 2 - 75 + 150 &&
      mousePosY > altura / 2 + 120 &&
      mousePosY < altura / 2 + 120 + 50
    ) {
      //se clicou em reiniciar, limpa os alvos
      alvos.limpa();
      alvos2Linha.limpa();
      //limpa pontuação
      recursos.reset();
      var audioPerdeu = document.getElementById("perdedor");
      audioPerdeu.currentTime = 0;
      audioPerdeu.pause();
      //volta pra jogar
      estadoAtual = estados.jogar;
    }
  }
}

//função em loop para atualizar e desenhar
function rodar() {
  atualizar();
  desenhar();

  //fica em loop
  window.requestAnimationFrame(rodar);
}

//função de atualizar status de personagens e dos alvos
function atualizar() {
  frames++;
  if (estadoAtual == estados.jogando) {
    alvos.atualizar();
    alvos2Linha.atualizar();
  }
}

//função de desenhar o personagem, alvos, ambiente, etc
function desenhar() {
  ctx.fillStyle = "#b48a5f";
  //preenche conforme as posições e tamanhos definidos: x, y, largura e altura
  ctx.fillRect(0, 0, largura, altura);

  chao.desenhar();
  chao2Linha.desenhar();
  bancada.desenhar();

  //inicio do jogo
  if (estadoAtual == estados.jogar) {
    //fundo com opacidade

    ctx.fillStyle = "rgba(74, 74, 74, 0.5)";
    ctx.fillRect(0, 0, largura, altura);

    //Imagem de start
    ctx.drawImage(startImg, largura / 2 - 80, altura / 2 - 40, 150, 60);
    ctx.drawImage(logo, 120, 20, 380, 70);
  } else if (estadoAtual == estados.jogando) {
    alvos.desenhar();
    alvos2Linha.desenhar();
    mouse.desenhar();
    recursos.desenhar();
  } else if (estadoAtual == estados.configurando) {
    //fundo com opacidade
    ctx.fillStyle = "rgba(74, 74, 74, 0.8)";
    ctx.fillRect(0, 0, largura, altura);

    ctx.fillStyle = "#fff";
    ctx.font = "30px Poppins";
    ctx.fillText("Qual o nível de dificuldade?", 120, 130);

    ctx.drawImage(facilImg, largura / 2 - 80, altura / 2 - 90, 150, 60);
    ctx.drawImage(medioImg, largura / 2 - 80, altura / 2 - 20, 150, 60);
    ctx.drawImage(dificilImg, largura / 2 - 80, altura / 2 + 50, 150, 60);
  } else if (estadoAtual == estados.pausado) {
    ctx.fillStyle = "rgba(74, 74, 74, 0.8)";
    ctx.fillRect(0, 0, largura, altura);
    ctx.drawImage(pausaImg, largura / 2 - 75, altura / 2 - 75, 150, 150);
    ctx.drawImage(reiniciarImg, largura / 2 - 75, altura / 2 + 120, 150, 50);
  } else if (estadoAtual == estados.perdeu) {
    ctx.fillStyle = "rgba(74, 74, 74, 0.8)";
    ctx.fillRect(0, 0, largura, altura);
    ctx.fillStyle = "#fff";
    ctx.font = "30px Poppins";
    ctx.fillText("Você perdeu!", 220, 130);
    ctx.fillText("Boa sorte da próxima vez.", 150, 160);
    ctx.drawImage(tristeImg, largura / 2 - 75, altura / 2 - 75, 150, 150);
    ctx.drawImage(reiniciarImg, largura / 2 - 75, altura / 2 + 120, 150, 50);

    var audioPerdeu = document.getElementById("perdedor");
    audioPerdeu.play();
  }
}
