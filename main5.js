var img = "";
var img2 = "";
var img3 = "";
var img4 = "";
var img5 = "";



function setup(){
    canvas = createCanvas(1080, 540);
    canvas.center();
}
function preload(){
    img = loadImage("img1.jpeg");
    img2 = loadImage("img2.jpeg");
    img3 = loadImage("img3.jpeg");
    img4 = loadImage("img4.jpeg");
    img5 = loadImage("img5.jpeg");
    Objectdetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = 'Status = Can not detect as image is AI generated';
}
function draw(){
    image(img5, 0, 0, 1080, 540);}
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
function nextimg5(){
    window.location.href = "index.html";
}
function lastimg5(){
    window.location.href = "index4.html";
}