function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    video.position(20,210);
    canvas=createCanvas(800,500);
    canvas.position(600,230);

    poseNet=ml5.poseNet(video, modelLoaded());
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#0000FF");
}

function modelLoaded(){
    console.log("PoseNet is initialised");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
    }
}