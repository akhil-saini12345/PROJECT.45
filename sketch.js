var PLAY = 1;
var END = 2;
var gameState = PLAY;
var man,manImage;
var mask,maskImage;
var vaccine,vaccineImage;
var sanitizer,snitizerImage;
var virus,virusImage;
var backGround,bg,ground;
var immunity = 100;
var virusGroup,vaccineGroup,maskGroup,sanitizerGroup;
var restart,restartImage,gameOver,gameOverImage;
function preload(){
maskImage = loadImage("mask.png");
vaccineImage = loadImage("vaccine.png");
sanitizerImage = loadImage("sanitizer.png");
virusImage = loadImage("virus.png");
bg = loadImage("background.jpg");
restartImage = loadImage("restart.png");
gameOverImage = loadImage("game over.png")
}
function setup() {
createCanvas(1500,800);

//backGround = createSprite(750,400,20000,50);
//backGround.addImage("background.jpg",bg);
//backGround.scale = 3;
//backGround.x = backGround.width/2;

virusGroup = new Group();
maskGroup = new Group();
vaccineGroup = new Group();
sanitizerGroup = new Group();

ground = createSprite(750,750,1500,50);

restart = createSprite(750,500);
restart.addImage("restart",restartImage);

gameOver = createSprite(750,200)
gameOver.addImage(gameOverImage);


man = createSprite(200,500,20,400);

immunity = 100;

}

