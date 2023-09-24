var img = "";
var img2 = "";
var img3 = "";
var img4 = "";
var img5 = "";



function setup(){
    canvas = createCanvas(550, 366);
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
    image(img4, 0, 0, 550, 366);
    fill("black");
    text("Horse", 90, 150);
    text("Horse", 265, 135);
    noFill();
    stroke("black");
    rect(80, 120, 150, 150);
    rect(260, 120, 180, 160);
}
function modelloaded(){
    console.log('Model has been loaded!');
    status = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if (error){
        console.error;
    }
    console.log(results);
}
function nextimg4(){
    window.location.href = "index5.html";
}
function lastimg4(){
    window.location.href = "index3.html";
}