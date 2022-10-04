window.onmousemove = move_ball ;

function move_ball(event)
{
    let ball = document.getElementById("moving-ball");
        // ball.style.top = window.event.clientX;
        // ball.style.left = window.event.clientY;  
        ball.style.top = `${window.event.clientY -50}px`;
        ball.style.left = `${window.event.clientX - 50}px`;  
        ball.style.backgroundColor= "blue";

        let label = document.getElementById("label");
        label.innerHTML = ` Ball location :: X :${window.event.clientX} Y :${window.event.clientY}` ;
}