function preload()

{
img1 = loadAnimation("Rambogun1.png","Rambogun2.jpg","Rambogun3.jpg","Rambogun4.jpg",);
}


function setup()
{
createCanvas(700,700)
pla = createSprite (350,350,100,100)
pla.addAnimation("running",img1)
  
  
}

function draw()
{
  background(0)
  drawSprites()
}