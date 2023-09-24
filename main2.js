var img = "";
var img2 = "";
var img3 = "";
var img4 = "";
var img5 = "";



function setup(){
    canvas = createCanvas(400, 352);
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
    image(img2, 0, 0, 572, 352);
    fill("black");
    text("Banana", 150, 80);
    noFill();
    stroke("black");
    rect(100, 60, 275, 200);
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
function nextimg2(){
    window.location.href = "index3.html";
}
function lastimg2(){
    window.location.href = "index.html";
}