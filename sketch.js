let x = [];
let y = [];
let numPoints = 10;
let speed = 2;

const rectX = 100;
const rectY = 100;
const rectWidth = 200;
const rectHeight = 200;

function setup() {
  createCanvas(400, 800);

  // Inicializar las posiciones de los puntos dentro del rectángulo
  for (let i = 0; i < numPoints; i++) {
    x[i] = random(rectX, rectX + rectWidth);
    y[i] = random(rectY, rectY + rectHeight);
  }
}

function draw() {
  background(160);

  // Establecer el modo de color en escala de grises
  colorMode(GRAY);

  // Dibujar el rectángulo en escala de grises
  fill(240); // Establecer el nivel de gris (0-255)
  //rect(rectX, rectY, rectWidth, rectHeight);
  rect(100, 300, 200, 400);

  // Dibujar un círculo en escala de grises
  fill(0);
  ellipse(
    200,
    100,
    200,
    30
  ); /*Por defecto, los primeros dos parámetros definen la ubicación, y el tercero y cuarto definen el ancho y altura de la figura*/
  ellipse(200, 300, 200, 30);
  ellipse(200, 700, 200, 30);

  // Dibujar los puntos en las posiciones actuales
  beginShape(POINTS);
  for (let i = 0; i < numPoints; i++) {
    let newX = x[i] + random(-speed, speed);
    let newY = y[i] + random(-speed, speed);

    // Verificar si las nuevas posiciones están dentro del rectángulo
    if (
      newX >= rectX &&
      newX <= rectX + rectWidth &&
      newY >= rectY &&
      newY <= rectY + rectHeight
    ) {
      x[i] = newX;
      y[i] = newY;
    }

    // Dibujar los puntos en las posiciones actuales
    point(x[i], y[i]);
  }
  endShape();

  console.log("X: " + mouseX + " Y:" + mouseY);
}

function mousePressed() {
  if (mouseButton === RIGHT) {
    // Multiplicar los puntos por 5
    let newNumPoints = numPoints * 5;

    // Verificar si el nuevo número de puntos no supera el límite
    if (newNumPoints <= 100000) {
      numPoints = newNumPoints;

      // Reasignar las posiciones de los puntos dentro del rectángulo
      for (let i = 0; i < numPoints; i++) {
        x[i] = random(rectX, rectX + rectWidth);
        y[i] = random(rectY, rectY + rectHeight);
      }
    }
  } else if (mouseButton === LEFT) {
    // Reiniciar a 10 puntos
    numPoints = 10;
    strokeWeight(2);

    // Reasignar las posiciones de los puntos dentro del rectángulo
    for (let i = 0; i < numPoints; i++) {
      x[i] = random(rectX, rectX + rectWidth);
      y[i] = random(rectY, rectY + rectHeight);
    }
  } //PARA QUE AL APRETAR CLICK DERECHO NO SE ABRA EL MENU
  document.oncontextmenu = function () {
    return false;
  };
}
