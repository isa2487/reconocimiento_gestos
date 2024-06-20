noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup (){
    video = createCanvas(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(560,550);
    canvas.on('pose', gotPoses);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initiallized!');
}


function gotPoses(results)
{
    if(results.lengts > 0) 
    {
     console.log(results);
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     console.log("noseX = " + noseX + "noseY =" +noseY);

     leftWristX = results[0].pose.leftWristX.x;
     rightWristX = results[0].pose.rightWristX.x;
     difference = floor( leftWristX - rightWristX);

     console.log("leftWristX =" + leftWristX +" rightWristX =" + rightWristX + " difference = " +difference);
    }
}