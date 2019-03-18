
var numSquares = 6;
var color = [];
var pickedColor ;
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var messageDisplay = document.getElementById("message");
var squares = document.querySelectorAll(".square");
var resetButton = document.getElementById("reset");
var modes = document.querySelectorAll(".mode")


init();

function init(){
  
   /*  Asignar los colores a los cuadrados y verificar si se clickea el correcto o no  */
  for(var i=0; i<squares.length; i++){
    squares[i].addEventListener("click",function(){
      var clickedColor = (this.style.background);
      if(clickedColor === pickedColor){
        messageDisplay.textContent="Winner!!";
        h1.style.background = clickedColor;
        resetButton.textContent = "Play again"
        for(var i=0; i<squares.length; i++){
          changeColor(clickedColor);
          }
      }else{
        this.style.background = "#232323";
        messageDisplay.textContent="Try Again"
      }
    })
  }
  setupMode();
  reset();
 }
 
/* Botones de dificultad */
function setupMode(){
  
   for(i=0; i<modes.length; i++){
    modes[i].addEventListener("click",function(){
      modes[0].classList.remove("selected");
      modes[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent ==="Easy" ? numSquares=3 : numSquares=6;   
      reset();
    })
}
}

/* Funcion para asignar colores aleatorios al array */
function generateRandomColors(num){
  var arr = [];
  for(var i = 0; i<num; i++){
    arr.push(generateRGB());
    }
    function generateRGB(){
      r= Math.floor(Math.random()*256);
      g= Math.floor(Math.random()*256);
      b= Math.floor(Math.random()*256);
      return "rgb("+r+", "+g+", "+b+")";    
        }
    return arr;
}

/*  Elegir un color aleatorio  */
function pickColor(){
  var rand = Math.floor(Math.random()*color.length);
  return color[rand];
}

/* Funcion para asignar el mismo color a todos los cuadrados */
function changeColor(color){
  for(var i=0; i<squares.length; i++){
    squares[i].style.background = color;
  }
}

/* Asignar funcionalidad al boton de new game */
resetButton.addEventListener("click",function(){
 reset();
});


function reset(){
  color = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  message.textContent = " ";
  for(var i=0; i<squares.length; i++){
    if(color[i]){
      squares[i].style.background = color[i]
      squares[i].style.display = "block";
    }else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background ="steelblue";
}





