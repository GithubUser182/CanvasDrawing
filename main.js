var mouseEvent="empty"
var last_pos_of_x, last_pos_of_y

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

color="black"
var width_line=3

canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    mouseEvent="mouseDown"
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mouseEvent="mouseUP"
}

canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouseEvent="mouseleave"
}

canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    current_pos_mouse_x=e.clientX - canvas.offsetLeft
    current_pos_mouse_y=e.clientY - canvas.offsetTop

    if(mouseEvent == "mouseDown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=width_line

        console.log("last position of x and y =")
        console.log("x= " + last_pos_of_x + " y=" + last_pos_of_y)
        ctx.moveTo(last_pos_of_x,last_pos_of_y)

        console.log("current position of x and y =")
        console.log("x= " + current_pos_mouse_x + " y=" + current_pos_mouse_y)
        ctx.lineTo(current_pos_mouse_x,current_pos_mouse_y)
ctx.stroke()
    }

    last_pos_of_x=current_pos_mouse_x
    last_pos_of_y=current_pos_mouse_y
}