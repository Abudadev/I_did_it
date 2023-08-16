var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");
var img = "Birthdayimage.jpg";
var Birthday_image_object = "" 
var name_value = "";

function Birthday()
{
  fabric.Image.fromURL("BirthdayImage.jpg", function(img){
    Birthday_image_object = img;

    Birthday_image_object.scaleToWidth(800);
    Birthday_image_object.scaleToHeight(600);
    Birthday_image_object.set({
         top:0,left:0
    });
    canvas.add(Birthday_image_object)
  });
}

function put_name(){
name_value = document.getElementById("name").value;
document.getElementById("display_name").innerHTML = name_value;
}

function playSound(){
 x.play();	
}
