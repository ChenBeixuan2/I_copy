One_hundred_Memes_In_One_Song="";
This_Game="";

function setup(){
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    This_Game = loadSound("music2.mp3");
    One_hundred_Memes_In_One_Song = loadSound("music1.mp3");
}

function draw(){
    image(video, 0, 0, 600, 530);
}