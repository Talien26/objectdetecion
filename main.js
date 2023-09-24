var img = "";
var img2 = "";
var img3 = "";
var img4 = "";
var img5 = "";
var results = [];
results = objects;
var Status



function setup(){
    canvas = createCanvas(402, 902);
    canvas.center();
}
function preload(){
    img = loadImage("img1.jpeg");
    img2 = loadImage("img2.jpeg");
    img3 = loadImage("img3.jpeg");
    img4 = loadImage("img4.jpeg");
    img5 = loadImage("img5.jpeg");
    Objectdetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = 'Status = detected';

}
function draw(){
    image(img, 0, 0, 402, 902);
    fill("black");
    text("Light bulb", 45, 240);
    noFill();
    stroke("black");
    rect(40, 220, 300, 250);
    
    if(Status != ""){
        for(i = 0; i< objects.length; i++) {
          document.getElementById('status').innerHTML = 'Status = Object Detected';
  
          fill(r, g, b);
          percent = floor(objects[i].confidence *100);
          text(objects[i].label + " " + percent + "%", objects[i].x +15, objects[i].y +15);
          noFill();
          stroke(r, g, b);
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
          }
      }
}
function modelloaded(){
    console.log('Model has been loaded!');
    Status = true;
    Objectdetector.detect(img, gotResults);
}
function gotResults(error, results){
    if (error){
        console.error;
    }
    console.log(results);
}
function nextimg(){
    window.location.href = "index2.html";
}
function lastimg(){
    window.location.href = "index5.html";
}