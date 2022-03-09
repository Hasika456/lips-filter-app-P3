noseX=0;
noseY=0;


function preload(){
    clown_nose=loadImage('lips.png');
}



function setup(){
    canvas=createCanvas(350,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 350, 300);
    image(clown_nose, noseX, noseY, 60, 60);
}

function take_snapshot(){
    save('MyPicture.png');
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-30;
        noseY=results[0].pose.nose.y+3;
        console.log("lips X = " + noseX);
        console.log("lips Y = " + noseY);
    }
}

