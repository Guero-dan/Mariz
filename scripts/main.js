var que=0
var euq=0

function preload() {
	// loadingAllSounds();  
	setSprites();
	MarioAnimation();
}

function amogus(erre){
	if (erre[0]) {
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////console.log(erre)
		que=erre[0].pose.nose.x
		euq=erre[0].pose.nose.y
	}
}

function setup() {
	createCanvas(gameConfig.screenX,gameConfig.screenY);
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	pose=ml5.poseNet(video, ()=>{console.log("advertencia:sensacion termica de 50grados celsius")})
	pose.on("pose", amogus)
	// playBGMusic();
}

function draw() {
	game()
}





