let count = 1;
document.getElementById("slider-btn1").checked = true;

setInterval( function(){
	nextImage();
}, 4000)

function nextImage(){
	count++;
	if(count>4){
		count=1;
	}
		document.getElementById("slider-btn"+count).checked = true;
}