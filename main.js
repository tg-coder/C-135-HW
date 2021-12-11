status = "";
function setup()
{
	canvas = createCanvas(480, 380);
	canvas.center();
	video.size(480, 380);
}
function start()
{
	objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects .. ";
  status = document.getElementById("object_name");
}
function modelLoaded()
{
	console.log("Model Loaded");
	status = true;
}
function draw()
{
	
}