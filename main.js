var mouseEvent="empty";
var lastpositionofx,lastpositionofy;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d")
Color="blue";
widthofline=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;
if (mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = Color;
    ctx.lineWidth = widthofline;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
}
last_position_of_x = current_position_of_mouse_x; last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
mouseEvent="mouseleave";
}