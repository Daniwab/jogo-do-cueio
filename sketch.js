var garden,gardenImg
var rabbit,rabbitImg;
var apple, appleImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);

  // mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x = mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  gerarMaçãs();
  
}




function gerarMaçãs(){
    if(frameCount % 100 === 0){
      var x = (random(200,0)) 
      var apple = createSprite(x, 0)
      apple.addImage(appleImg);
      apple.velocityY = 4;
      apple.scale = 0.05
    }
}