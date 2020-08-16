
var d = new Date();
document.getElementById("date").innerHTML=d;
function show(){
  
 document.getElementById("image").src='onn.gif'; 
 document.getElementById('demo').innerHTML="Light is ON";
}
function hide(){
  document.getElementById('image').src="offf.gif";
  document.getElementById('demo').innerHTML="Light is OFF";
  
}