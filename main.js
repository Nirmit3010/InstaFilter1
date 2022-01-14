rightEyeX = "";
rightEyeY = "";

function preload() {
    dog_nose = loadImage("https://i.postimg.cc/qqBvzvK2/wh1-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    //circle(rightEyeX, rightEyeY, 20);
    image(dog_nose, rightEyeX-90, rightEyeY-100, 200, 200);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        rightEyeX = results[0].pose.rightEye.x;
        rightEyeY = results[0].pose.rightEye.y;
        console.log("rightEye x=" + rightEyeX);
        console.log("rightEye y=" + rightEyeY);
    }
}

function modelLoaded() {
    console.log("PoseNet is initialised");
}

function take_snapshot() {
    save('myFilterImage.png');
}