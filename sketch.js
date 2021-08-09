const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var hideP,seekP,diamond;


function preload(){

	hideP=loadImage("images/Hiding_player.gif");
  seekP=loadImage("images/seeking_player.gif");
  diamond=loadImage("images/diamond.gif");
  
  }

  function setup() {
    createCanvas(1350,650);
    
  }

function draw() {
  background("pink");  

  var boy = createSprite(50,130,50,50);
  boy.addImage(seekP);
  boy.scale=0.2;
  
 

  var cardboard1 = createSprite(10,70,2900,20);
  cardboard1.shapeColor="red"

  var cardboard2= createSprite(10,70,20,2300);
  cardboard2.shapeColor="blue"

  var cardboard3= createSprite(1290,70,20,2300);
  cardboard3.shapeColor="blue"

  var cardboard4 = createSprite(10,580,2900,20);
  cardboard4.shapeColor="red"

  var v1 = createSprite(80,150,10,50);
 v1.shapeColor="red"

  var h1 = createSprite(150,130,150,10);
  h1.shapeColor="red"

  var v2 = createSprite(120,190,10,50);
 v2.shapeColor="red"

 var h2 = createSprite(70,220,110,10);
 h2.shapeColor="red"


  drawSprites();
}