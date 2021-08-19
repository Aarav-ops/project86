var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 #myCanvas
 {
     border-width:10px;
     background-color: white;
     broder-style:ridge;
     background-color:darkvoilet;
 }

function new_image()
{
	fabric.ImagefromURL(BirthImage.jpg , function(Img) {
        block_image_object.scaleTowidth(700);
        block_image_object.scaleToheight(510);
        block_image_object.style({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });
}
	


function playSound(){
	bdayaudio.mp3.play();
}
