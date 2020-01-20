var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keyup", dibujarTeclado);

console.log(keyup);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x_punto_inicial_linea = 150;
var y_punto_inicial_linea = 150;

dibujarLinea("red", 149, 149 , 151 , 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();    
}

var color_lineas = "blue";
var movimiento = 10;

function dibujarTeclado(evento)
{
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(color_lineas ,x_punto_inicial_linea , y_punto_inicial_linea ,x_punto_inicial_linea , y_punto_inicial_linea - movimiento , papel );
            y_punto_inicial_linea = y_punto_inicial_linea - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(color_lineas ,x_punto_inicial_linea , y_punto_inicial_linea ,x_punto_inicial_linea , y_punto_inicial_linea + movimiento , papel );
            y_punto_inicial_linea = y_punto_inicial_linea + movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(color_lineas ,x_punto_inicial_linea , y_punto_inicial_linea ,x_punto_inicial_linea + movimiento, y_punto_inicial_linea , papel );
            x_punto_inicial_linea = x_punto_inicial_linea + movimiento;
        break;
        case teclas.LEFT:
                dibujarLinea(color_lineas ,x_punto_inicial_linea , y_punto_inicial_linea ,x_punto_inicial_linea - movimiento, y_punto_inicial_linea , papel);
                x_punto_inicial_linea = x_punto_inicial_linea - movimiento;
        break;
        default :
        console.log("otra tecla");
        break;
    }
}
 