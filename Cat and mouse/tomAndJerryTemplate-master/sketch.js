var garden,gardenImg;
var cat ,catImg;
var mouse,mouseImg;
var catsImg;
var jerryImg;
var invisiblewall;
var kitImg;
var JerrImg;
function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png")
    catImg=loadImage("images/cat1.png")
    mouseImg=loadImage("images/mouse1.png")
    catsImg=loadAnimation("images/cat2.png","images/cat3.png")
    jerryImg=loadAnimation("images/mouse2.png","images/mouse3.png")
    kitImg=loadImage("images/cat4.png")
    JerrImg=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(850,650,50,50)
    cat.addImage("cat",catImg)
    cat.scale=0.2

    mouse=createSprite(170,650,50,50)
    mouse.addImage("mouse",mouseImg)
    mouse.scale=0.2

    invisiblewall=createSprite(200,400,20,800)
    invisiblewall.visible=false;  
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown("left"))
     {
       cat.velocityX=-3
       cat.addAnimation("catrunning",catsImg)
       cat.changeAnimation("catrunning")
       mouse.addAnimation("jerrycheer",jerryImg)
       mouse.changeAnimation("jerrycheer")
     }

     if(cat.isTouching(invisiblewall))
     {
         cat.velocityX=0
         cat.addImage("catstop",kitImg)
         cat.changeAnimation("catstop")
         mouse.addImage("Jerrysearch",JerrImg)
         mouse.changeAnimation("Jerrysearch")
     }


    textSize(10)
    fill("black")
    text(mouseX+","+mouseY,mouseX,mouseY)
   // keyPressed();
    drawSprites();
}


/*function keyPressed(){

  //For moving and changing animation write code here
  

}*/
