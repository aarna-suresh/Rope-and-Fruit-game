//Pirate Cannon Game by Aarna using JS


//Declare variables for game objects and behaviour indicators(FLAGS)
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

//declare variables for creation of simulation
var userEngine, userWorld;

var string;
var ground;
var fruit, rope;
var fruit_con;

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  createCanvas(500, 700);

  //defining variables for simulation
  userEngine = Engine.create();
  userWorld = userEngine.world;
  ground = new Ground(200, 680, 600, 20);

  //creation of rope and fruit body
  rope = new Rope(7, { x: 245, y: 30 });
  fruit = Bodies.circle(300, 300, 20);
  Matter.Composite.add(rope.body, fruit);

  fruit_con = new Link(rope, fruit);

  //creating a string
  var string_options = {
    bodyA: fruit.body,
    pointB: { x: 100, y: 300 },
    length: 7,
    stiffness: 1,
  }

  string = Constraint.create(string_options);
  World.add(userWorld,string);

}

//All modifications, changes, conditions, manipulations, actions 
//during the course of the program are written inside function draw.
//All commands that are supposed to be executed and checked continously
// or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of 
//the program.
function draw() {

  //set background color 
  background(51);

  //activating simulation
  Engine.update(userEngine);

  //displaying the rope
  rope.show();

  //making the fruit
  ellipse(fruit.position.x, fruit.position.y, 30, 30);



  //displaying the ground
  ground.show();




}
