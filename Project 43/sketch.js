var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  this.system = createSystem('');
  security = new Security();
  this.button3 = createButton('Check');
  this.input = createInput("Name");
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }


  this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount+=1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("Hello " + player.name)
    this.greeting.position(130, 100);
  });



  drawSprites()
}