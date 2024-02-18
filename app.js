var main=document.querySelector('#main');
var cur=document.querySelector(".cursor");

main.addEventListener("mousemove",function(cr){
     cur.style.left = cr.x+"px";
     cur.style.top = cr.y+"px";
});