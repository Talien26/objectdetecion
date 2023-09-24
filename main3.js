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
    image(img3, 0, 0, 550, 366);
    fill("white");
    text("Apple", 120, 50);
    noFill();
    stroke("white");
    rect(100, 30, 300, 300);
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
function nextimg3(){
    window.location.href = "index4.html";
}
function lastimg3(){
    window.location.href = "index2.html";
}