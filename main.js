nosex=0;
nosey=0;
function preload(){
clownose=loadImage('https://i.postimg.cc/FHtrXZBs/download-8.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    fill('red');
    stroke('black');
    circle(nosex,nosey,20);
}
function take_snapshot(){
    save('download');
}
function modelLoaded(){
    console.log("modelLoaded");
}
function gotPoses(results){
    if(results.length>0 ){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex= "+nosex);
        console.log("nosey= "+nosey);
    }
}