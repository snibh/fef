nose_x = "";
nose_y = "";
right_eye_x = "";
right_eye_y = "";
left_eye_x = "";
left_eye_y = "";
center = "";
earx = "";
eary = ""

function take_snapshot() {

save("my_clown_nose.png");

}
function preload() {

clown_nose = loadImage('clown.png')
goggles = loadImage('goggles.png');

}
function setup() {

    Canvas = createCanvas(640,480);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded );
    posenet.on( 'pose',gotPoses);


}
function modelLoaded() {

console.log("succes posenet");
}
function gotPoses(results){

console.log(results);


console.log(" eyerx=" + results[0].pose.rightEye.x);
console.log("eyery =" + results[0].pose.rightEye.y);

console.log(" eyelx=" + results[0].pose.leftEye.x);
console.log(" eyely=" + results[0].pose.leftEye.x);

console.log("nose x =" + results[0].pose.nose.x);
console.log("nose y =" + results[0].pose.nose.y);

console.log("ear x =" + results[0].pose.rightEar.x);
console.log("ear y =" + results[0].pose.rightEar.y);


nose_x =   results[0].pose.nose.x;
nose_y =   results[0].pose.nose.y;



earx =   results[0].pose.rightEar.x;
eary =   results[0].pose.rightEar.y;


right_eye_x = results[0].pose.rightEye.x;
right_eye_y = results[0].pose.rightEye.y;

left_eye_x = results[0].pose.leftEye.x;
left_eye_y = results[0].pose.leftEye.y;

center = (right_eye_x + left_eye_x)/2;

}
function draw() {

image(video,0,0,640,);
image(clown_nose,nose_x-20,nose_y-20,40,40);
image(goggles,center-50,right_eye_y-50,100,100);
image (clown_nose,earx,eary-20,20,40,40)



}