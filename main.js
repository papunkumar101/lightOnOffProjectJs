
function setcookies(){
  alert("all data stored in your cookies for one day?" )
document.cookie="name="+document.myform.name.value+";max-age="+60*60*24*1;
document.cookie="age="+document.myform.age.value+";max-age="+60*60*24*1;
}
function getcookies(){
 var a = document.cookie;
  console.log(a);

document.getElementById('jadu').innerHTML="Hello, "+document.myform.name.value + "<br> "+ "welcome to pk creation";
}
var n = document.getElementById(' name');
n.addEventListener("focus", focuss);
function focuss() {
  n.style.backgroundColor = "#3BBF2F73";
}
