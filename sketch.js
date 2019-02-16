function setup() {
  // put setup code here
  createCanvas(400, 300);
  textAlign(CENTER);
  textSize(15);
  strokeWeight(1);
  background(10);
}

function draw() {
  // put drawing code here
  fill(10, 30);
  rect(0, 0, width, height);
  stroke(190, 140, 10, 100);
  for (let i = 0; i < 7; i++) {
    let x = random(width);
    let y = random(height);
    point(x, y);
  }
  noStroke();
  fill(5, 5, 60);
  ellipse(width / 2, height / 2, 44);
  fill(22, 11, 100);
  ellipse(width / 2, height / 2, 42);
  fill(44, 33, 200);
  ellipse(width / 2, height / 2, 40);
  fill(44, 33, 233);
  ellipse(width / 2, height / 2, 36);
  fill(44, 33, 244);
  ellipse(width / 2, height / 2, 30);
  fill(244, 198, 44);
  text("Olá, Ponto Azul terrestre!", width / 2, height / 2 + 60);
}