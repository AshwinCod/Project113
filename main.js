function preload(){
    
}
function setup(){
    canvas = createCanvas(850, 750);
    canvas.position(200, 300);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = ""
}
function draw(){
    image(video, 0, 0, 350, 450);
    rect(0, 0, 650, 550);
    stroke(150, 255, 0)
    strokeWeight(20);
    fill(150);
    circle(45, 45, 55);
    circle(602, 48, 55);
    circle(45, 500, 55);
    circle(600, 500, 55);
    translate(width,0); // move to far corner 
    scale(-1.0,1.0); // flip x-axis backwards 
    image(video, 320, 100, 400, 350);
}
function take_snapshot(){
    save("video.png");
}