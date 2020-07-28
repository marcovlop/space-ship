// tela 1 
var tela = 1;
var xMenu = 135;
var yMenu1 = 180;
var yMenu2 = 240;
var yMenu3 = 300;
var largura = 220;
var altura = 50;
let menu;

//tela 2
var x =39;
var y = 80;
var xforma= [];
var yforma = [];
var quantidades = 5;
var raioF = 15;
let vn1= [];
let vn2 =[];



     // canhao 
var tx = 0;
var ty = 0;
var estadoDisparo = false
var xcanhao = 90;
var ycanhao = 80;
var raioC = 3;

    
var speedforma = 3;
var pontos = 0;
var vidas  = 3;
let back;


// tela 4 
  let img;


function preload() {
  firetex = loadImage('firetex3.png');
  nave = loadImage('redshipr.png');
  tiro = loadImage('efecto_fuego_00005.png')
  game_over = loadImage('sad.png')
  retry = loadImage('retry.png');
  img = loadImage('eu.jpg' );
}
 
  
function setup() {
  back= loadImage('back.png');
  ff = loadImage('ff.jpg');
  
  
  createCanvas(500, 375);
  

  

  
  for(i=0;  i<quantidades; i++) {
  xforma[i] = random(0,500);
  yforma[i] = random(80,355);
  }
}

function draw() {
  if (tela == 1) {
  
   background(back);
        
  // nome menu no top 
    fill(0,212,0)
  textSize(36);
  textStyle(NORMAL);
  textAlign(CENTER);
  text('MENU', 0, 12, width);
  
    //opçao iniciar
    //surgir borda
  if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu1 && mouseY<yMenu1+altura){
  stroke(20);
  fill(120);
  rect(xMenu, yMenu1, largura, altura,55 );  
  }   
    
  textSize(32);
  fill(0,212,0)
  noStroke();
  text('Iniciar' ,0, 190, width);
  
    // opção informaçoes
    //surgir borda
  if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu2 && mouseY<yMenu2+altura){
  stroke(20);
  fill(120);
  rect(xMenu, yMenu2, largura, altura,55 );
   }   
  fill(0,212,0)
  noStroke();
  textSize(32);
  text('Informações', 0, 250, width);
   
  if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu3 && mouseY<yMenu3+altura){
  stroke(20);
  fill(120);
  rect(xMenu, 300, largura, altura,55);
  }
    
   fill(0,212,0)
  noStroke();
  textSize(32);
  textStyle(NORMAL);
  textAlign(CENTER);
  text('Creditos', 0, 310, width);
  }
  if (tela == 2) {
     
    
  background(ff);
  textSize(20);
  fill(255)
  text('Pontos: '+pontos , 70, 30);
  text('Vidas: '+vidas , 450, 30);
 
  
  for(i = 0; i < quantidades; i++){
     image(firetex, xforma[i], yforma[i], 50,2*raioF,0,0);
    xforma[i] =xforma[i] -  speedforma
      if(xforma[i] < 0){ 
       xforma[i] = random(500,500); 
       yforma[i] = random(70,350);
         pontos = pontos + 1
      }
  }
  image(nave, x, y,60,30,10,0);
    // "criando canhao da nave"
  noFill();
  ellipse(xcanhao,ycanhao,2*raioC,2*raioC)
    
  // MOVENDO NAVE
  if(keyIsDown(RIGHT_ARROW)){
  x = x + 3.5;
    if(x>458){
      x=458;
    }   
  }
  if(keyIsDown(LEFT_ARROW)){
  x = x -3.5;
     if(x<0){
      x = 1
     }
  }
  if(keyIsDown(UP_ARROW)){
    y = y - 3.5;
    if(y<40){
    y = 40
    } 
   
  }
  if(keyIsDown(DOWN_ARROW)){
     y = y + 3.5;
    if(y>350){
    y = 350
    }
  }
      
  
  //movendo canhao 
  if(keyIsDown(RIGHT_ARROW)){
  xcanhao = xcanhao + 3.5;
    if(xcanhao>507){
      xcanhao=507;
    }   
}
  if(keyIsDown(LEFT_ARROW)){
  xcanhao = xcanhao -3.5;
     if(xcanhao<40){
      xcanhao = 40
     }
  }
  if(keyIsDown(UP_ARROW)){
    ycanhao = ycanhao - 3.5;
    if(ycanhao<40){
    ycanhao = 40
    } 
   
  }
  if(keyIsDown(DOWN_ARROW)){
     ycanhao = ycanhao + 3.5;
    if(ycanhao>350){
    ycanhao = 350
    }
  }
    
  // disparo nave
    if( keyIsDown (CONTROL) && estadoDisparo == false) {
    tx = xcanhao;
    ty = ycanhao;
    estadoDisparo = true
  }
    if(estadoDisparo){
      fill(255);
      image(tiro,tx,ty,50,30,0,0)
      tx = tx+10
      if(tx>500) {
      estadoDisparo = false
      }
    }
  for(j = 0; j<quantidades; j++){
    if(dist(x, y, xforma[j], yforma[j]) < raioC+raioF) {
    vidas = vidas - 1; 
    x = 10;
    y = 200; 
    xcanhao = 60;
    ycanhao = 200; 
    }
     
    if(vidas == 0) {
    tela = 5
    background(back);
    image(game_over, 95,70,300,200);
     y = 500;
    image(retry,200,290,90,40);
    
    }
  }
    

  
  
}
  if (tela == 3) {
  background(back);
    textSize(15)
    fill(150)
    noStroke();
    textAlign(LEFT)
    text('(EF03MA05) Utilizar diferentes procedimentos de cálculo mental e \nescrito para resolver problemas significativos envolvendo adição e \nsubtração com números naturais.', 10, 100);
    
    textSize(15);
    noStroke();
    textAlign(LEFT)
    text('Controle a nave usando as setas do teclado. Use o botão Ctrl (control), \npara disparar. ', 10, 200);
    noStroke()
    textSize(21)
  text('Voltar', 420,350)
  if(mouseX>395 && mouseX<395+100 && mouseY>325 && mouseY<325+40)
  stroke(155);
  noFill();
  rect(395, 325, 100,40,55 );  
  
         
  }
  if (tela == 4) {
  background(back);
  image(img, 10, 50);
  
  textAlign(CENTER);
  fill(150)
  noStroke();
  textSize(20)
    text('Programado por:\nMarcos Vinicius',200,70);
    
  textAlign(LEFT);
  textSize(12);
  noStroke();
    text('Email: marcors.rq@gmail.com', 10 , 170);
    
  noStroke()
  textSize(21)
    text('Voltar', 420,350)
  
  if(mouseX>395 && mouseX<395+100 && mouseY>325 && mouseY<325+40)
  stroke(155);
  noFill();
  rect(395, 325, 100,40,55 );  
  }
}


function mouseClicked() {
    if(tela == 1) {
      if (mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu1 && mouseY<yMenu1+altura) {
        tela = 2
      }
      if (mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu2 && mouseY<yMenu2+altura) {
        tela = 3
      } 
      if (mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu3 && mouseY<yMenu3+altura) {
        tela = 4
      }
      
  }
  if(tela == 3) {
   if(mouseX>395 && mouseX<395+100 && mouseY>325 && mouseY<325+40){
     tela = 1
   }
  }
  if(tela == 4) {
      if(mouseX>395 && mouseX<395+100 && mouseY>325 && mouseY<325+40) {
      tela = 1
      }
    }
  if(tela == 5) {
      if (mouseX>200 && mouseX<200+90 && mouseY>290 && mouseY<290+40){
      tela = 1
        vidas = 3;
        pontos = 0;
        y = 80;
        ycanhao = y;
        xforma[i]  = 499;
        
      }
  }
  
}
