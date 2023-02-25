const turnOn = document.getElementById("turnOn"); // criando constantes com os elementos do css
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function islampbroken() { //função de verificação
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  if (!islampbroken()) lamp.src = "./mine projeto lampada/ligada.jpg";
}

function lampOff() {
  if (!islampbroken()) lamp.src = "./mine projeto lampada/desligada.jpg";
}

function lampbroken() {
  lamp.src = "./mine projeto lampada/quebrada.jpg";
}

turnOn.addEventListener("click", lampOn); //verificação de evento e depois chamada da função
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseout", lampOff);
lamp.addEventListener("dblclick", lampbroken);
