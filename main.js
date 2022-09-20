function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
  strokeWeight(0.2);
  stroke(255);
}

let vertexes = [];
let startDrawing = false;

function mousePressed() {
  vertexes.push({ x: mouseX, y: mouseY });
  fill(255, random(50));
  //   if (startDrawing) {
  //     let distances = [];
  //     for (let i = 0; i < 3; i++) {
  //       distances[i] = dist(vertexes[i].x, vertexes[i].y, vertexes[3].x, vertexes[3].y);
  //     }
  //     vertexes.splice(distances.indexOf(max(distances)), 1);
  //     beginShape();
  //     for (let i = 0; i < 3; i++) {
  //       vertex(vertexes[i].x, vertexes[i].y);
  //     }
  //     endShape(CLOSE);
  //   }
  if (startDrawing) {
    let distances = [];
    for (let i = 0; i < vertexes.length - 1; i++) {
      distances[i] = dist(
        vertexes[i].x,
        vertexes[i].y,
        vertexes[vertexes.length - 1].x,
        vertexes[vertexes.length - 1].y
      );
    }
    let distances_sorted = [...distances];
    distances_sorted.sort((a, b) => a - b);

    const mini1 = distances.indexOf(distances_sorted[0]);
    const mini2 = distances.indexOf(distances_sorted[1]);

    beginShape();
    vertex(vertexes[mini1].x, vertexes[mini1].y);
    vertex(vertexes[mini2].x, vertexes[mini2].y);
    vertex(vertexes[vertexes.length - 1].x, vertexes[vertexes.length - 1].y);
    endShape(CLOSE);
  } else if (vertexes.length == 3 && !startDrawing) {
    startDrawing = true;
    beginShape();
    for (let i = 0; i < 3; i++) {
      vertex(vertexes[i].x, vertexes[i].y);
    }
    endShape(CLOSE);
  }
}

// function draw() {
//   let vertexes = [{ x: random(width), y: random(height) }];
//   for (let i = 1; i < 3; i++) {
//     const radius = random(30, 60);
//     vertexes[i] = {
//       x: vertexes[0].x + cos(random(TWO_PI)) * radius,
//       y: vertexes[0].y + sin(random(TWO_PI)) * radius,
//     };
//   }
//   for (let i = 0; i < 100; i++) {
//     beginShape();
//     fill(255, random(100));
//     for (let i = 0; i < 3; i++) {
//       vertex(vertexes[i].x, vertexes[i].y);
//     }
//     endShape(CLOSE);

//     vertexes.splice(floor(random(3)), 1);
//     const radius = random(50, 100);
//     vertexes[2] = {
//       x: vertexes[0].x + cos(random(TWO_PI)) * radius,
//       y: vertexes[0].y + sin(random(TWO_PI)) * radius,
//     };
//   }
//   noLoop();
// }
