const canvasElemento = document.querySelector("canvas")
const canvasCtx = canvasElemento.getContext("2d")

function setup (){
    canvasElemento.width = canvasCtx.width = screen.width
    canvasElemento.height = canvasCtx.height = screen.height

}

setup();