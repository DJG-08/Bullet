var car,wall;



function setup() {
createCanvas(1600,400)

  car = createSprite (200,50.50,50)

  wall = createSprite(200,1550,60,height/2)

  speed = random (55,90)
  weight = random (400,1500)
 
}
var speed,weight;
function draw() {
  background("yellow");
  bullet.velocityX = speed;
  bullet.velocityX = 5

  function hasCollided (bullet,wall){
    bulletRightEdge = bullet.x + bullet.width;
    wallLeftEdge = wall.x;
    if(bulletRightEdge>= wallLeftEdge){
      return true
    }
    return false;
  }

if(hasCollided(bullet,wall)){
  bullet.velocityX = 0
  var damage = 0.5 * weight * speed * speed / (thickness *thickness *thickness) ;
  if (damage>10)  {
    wall.shapeColor = color(255,0,0);
  }
  if (damage<10){
    wall.shapeColor = color(0,255,0);
  }
}

   hasCollided();
  drawSprites();
}