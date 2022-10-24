
 function chBg(){
    
    document.getElementById("main").style.animationName = "go";
}

function aniStop(){
    
    document.getElementById("main").style.animationName = "";
}

function changeWidht(){
    var widht = document.getElementById('widht').value
    var size = document.getElementById('size').value
    document.getElementById("main").style.width = widht+size
}
function changeHeight(){
    var height = document.getElementById('height').value
    var size = document.getElementById('size').value
    document.getElementById("main").style.height = height+size
}
function changeColor(){
    var color = document.getElementById('color').value
    document.getElementById("main").style.backgroundColor = color
}
function changeWidhtDefault(){
    document.getElementById("main").style.width = "50px"
}
const animate = gsap.timeline({ paused: true });
const animateBackground = new TimelineMax({ paused: true });
let toggle = true;

animateBackground
  .to("body", 0.1, { backgroundImage: "none", backgroundColor: "#111" }, 0.2)
  .set(".switch", { boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)" })
  .to(".text p", 0.1, { color: "#FFF" }, 0.2);

animate
  .to(".toggle-button", 0.2, { scale: 0.7 }, 0)
  .set(".toggle", { backgroundColor: "#FFF" })
  .set(".circle", { display: "none" })
  .to(".moon-mask", 0.2, { translateY: 20, translateX: -10 }, 0.2)
  .to(".toggle-button", 0.2, { translateY: 49 }, 0.2)
  .to(".toggle-button", 0.2, { scale: 0.9 });

document.getElementsByClassName("switch")[0].addEventListener("click", () => {
  if (toggle) {
    animate.restart();
    animateBackground.restart();
  } else {
    animate.reverse();
    animateBackground.reverse();
  }
  toggle = !toggle;
});