var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;
var cars,car1,car2,car3,car4;

var form, player, game;
var track, car1Img, car2Img, car3Img, car4Img

function preload(){
  track = loadImage("images/track.jpg")
  car1Img = loadImage("images/car1.png")
  car2Img = loadImage("images/car2.png")
  car3Img = loadImage("images/car3.png")
  car4Img = loadImage("images/car4.png")
}

function setup(){
  canvas = createCanvas(displayWidth -20,displayHeight -20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
