//Create a reference for canvas 
canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d")
green_Car_width=75;
green_Car_height=100;
green_Car_X=5;
green_Car_Y=225;
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	background_imageTag=new Image();
	background_imageTag.onload=uploadBackground;
	background_imageTag.src=background_image;

	greencar_imageTag=new Image();
	greencar_imageTag.onload=uploadgreencar;
	greencar_imageTag.src=greencar_image;
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(greencar_imageTag,green_Car_X,green_Car_Y|green_Car_width,green_Car_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(green_Car_Y>=0){
	green_Car_Y-=10
	uploadBackground();
	uploadgreencar()
}	//Define function to move the car upward

}

function down()
{
	if(green_Car_Y<=canvas.height-green_Car_height){
		green_Car_Y+=10
		uploadBackground();
		uploadgreencar()
	}
	//Define function to move the car downward
}

function left()
{
	if(green_Car_X>=0){
		green_Car_X-=10
		uploadBackground();
		uploadgreencar()
	}
	//Define function to move the car left side
}

function right()
{
	if(green_Car_X>=0){
		green_Car_x+=10
		uploadBackground();
		uploadgreencar()
	}
	//Define function to move the car right side
}
