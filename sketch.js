var goodShip,goodShipImg;
var villianShip,villianShipImg;
var backGroundImg;
var bulletImg,bullet;

var gameState = "play";

function preload(){

    goodShipImg = loadImage("images/goodShip.png");    
villianShipImg = loadImage("images/villianShip.png");
backGroundImg = loadImage("images/spaceBg.jpeg")
bulletImg = loadImage("images/laserBlast.png")
}

function setup(){
createCanvas(1200,650);

goodShip = createSprite(150,290,50,50);
goodShip.addImage(goodShipImg);
goodShip.scale = 0.2;

villianShip = createSprite(1050,70,50,50);
villianShip1 = createSprite(1050,125,50,50);
villianShip2 = createSprite(1050,180,50,50);
villianShip3 = createSprite(1050,235,50,50);
villianShip4 = createSprite(1050,290,50,50);
villianShip5 = createSprite(1050,345,50,50);
villianShip6 = createSprite(1050,400,50,50);
villianShip7 = createSprite(1050,455,50,50);
villianShip8 = createSprite(1050,510,50,50);
villianShip9 = createSprite(1050,565,50,50);

villianShip.addImage(villianShipImg);
villianShip1.addImage(villianShipImg);
villianShip2.addImage(villianShipImg);
villianShip3.addImage(villianShipImg);
villianShip4.addImage(villianShipImg);
villianShip5.addImage(villianShipImg);
villianShip6.addImage(villianShipImg);
villianShip7.addImage(villianShipImg);
villianShip8.addImage(villianShipImg);
villianShip9.addImage(villianShipImg);

villianShip.scale = 0.2;
villianShip1.scale = 0.2;
villianShip2.scale = 0.2;
villianShip3.scale = 0.2;
villianShip4.scale = 0.2;
villianShip5.scale = 0.2;
villianShip6.scale = 0.2;
villianShip7.scale = 0.2;
villianShip8.scale = 0.2;
villianShip9.scale = 0.2;

bulletGroup = new Group();

}

function draw(){
     background(backGroundImg)
    if(gameState==="play"){
    
        if(keyDown(UP_ARROW)){
            goodShip.y = goodShip.y-4;
        }
        if(keyDown(DOWN_ARROW)){
           goodShip.y = goodShip.y+4;
       }
       if(keyDown(RIGHT_ARROW)){
           goodShip.x = goodShip.x+4;
       }
       if(keyDown(LEFT_ARROW)){
           goodShip.x = goodShip.x-4;
       }
   
       if(keyDown("space")){
           bullets();
       }
       
       if(keyDown("space")){
           bullet.velocityX = 4; 
           bullet.y = goodShip.y;
       }
    }
    if(gameState==="end"){

    }


    edges = createEdgeSprites();
    goodShip.bounce(edges);
     

     drawSprites();
}

function bullets(){

    bullet = createSprite(200,300);
    bullet.addImage(bulletImg);
    bullet.scale = 0.1;
    bullet.velocityX = 4; 
bullet.y = goodShip.y;
    bulletGroup.add(bullet);
    goodShip.depth = bullet.depth
    goodShip.depth = goodShip.depth+1
}


