var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
var caption = ['Caption 1', 'Caption 2', 'Caption 3', 'Caption 4'];

var imgNumber = 0;
var imgLength = images.length - 1;

function changeImg(x){
	imgNumber += x;
	if (imgNumber > imgLength){
		imgNumber = 0;
	}

	if (imgNumber < 0){
		imgNumber = imgLength;
	}

	document.getElementById('image-1').src = 'images/' + images[imgNumber];
	document.getElementById('caption').innerHTML = caption[imgNumber];

	return false;
}

function autoRun(){
	setInterval("changeImg(1)", 5000);
}


var acc = document.getElementsByClassName("header");

for(var i = 0; i < acc.length; i++){
	acc[i].addEventListener("click", function(){
		var nextNode = this.nextElementSibling;
		nextNode.classList.toggle("show");
	});
}