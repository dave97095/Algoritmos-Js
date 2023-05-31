function saludo() {
    alert("Bienvenido Usuario");
    alert("A continuación encontrarás unos botones que ejecutan algoritmos realizados con js puro");
}


function suma() {
   // Se definen los números a sumar
    let A= 0;
    let B= 0;
    let SUMA = 0;

   //Se pide ingreso de números a sumar
    A = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR A SUMAR"));
    B = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR A SUMAR"));

   //lista de procesos de acuerdo a las variables   
    SUMA = A + B;

    alert("EL RESULTADO DE LA SUMA ES: " + SUMA);
}


function operaciones() {
 //Se definen los números para sacar operaciones
    let A= 0;
    let B= 0;
    let SUMA= 0;
    let RESTA= 0;
    let MULTIPLICACION= 0;
    let DIVISION= 0;
    
  //Se pide ingreso de números
    A = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR PARA OBTENER OPERACIONES BÁSICAS"));
    B = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR PARA OBTENER OPERACIONES BÁSICAS"));

  //lista de procesos de acuerdo a las variables  
    SUMA = A + B;
    RESTA = A - B;
    MULTIPLICACION = A * B;
    DIVISION = A / B;

  
    alert("EL RESULTADO DE LA SUMA ES: " + SUMA);
    alert("EL RESULTADO DE LA SUMA ES: " + RESTA);
    alert("EL RESULTADO DE LA SUMA ES: " + MULTIPLICACION);
    alert("EL RESULTADO DE LA SUMA ES: " + DIVISION);


}

function cuadrado() {
  //Variables a definir
    let A= 0;
    let CUADRADO= 0;

  //Ingreso de datos
    A = parseInt(prompt("POR FAVOR INGRESE EL VALOR PARA OBTENER NUMERO AL CUADRADO"));

  //Se pide ingreso una lista de procesos de acuerdo a las variables
    CUADRADO = A * A;
    alert("EL RESULTADO DE LA SUMA ES: " + CUADRADO);
            
}

function areaTriangulo() {
  //Variables a definir
    let BASE= 0;
    let ALTURA= 0;
    let AREA= 0;
    
  //Ingreso de datos
    BASE= parseInt(prompt("POR FAVOR INGRESE VALOR DE LA BASE DEL TRIANGULO "));
    ALTURA= parseInt(prompt("POR FAVOR INGRESE EL VALOR DE LA ALTURA DEL TRIANGULO"));

  //lista de procesos de acuerdo a las variables    
    AREA= (BASE*ALTURA)/2;

    alert("EL AREA DEL TRIANGULO ES: " + AREA);
}

function inversion() {
  const porcentajeBanco = 0.017;
  let capital = 0;
  let años = 0;
  let porcentajeBancoAño = 0;
  let ganancias = 0;
  let capitalfinal = 0;
  let gananciaFinal = 0;

  capital = parseInt(prompt("POR FAVOR INGRESE CAPITAL INICIAL"));
  años = parseInt(prompt("POR FAVOR INGRESE AÑOS QUE DESEA SABER"));

  porcentajeBancoAño = porcentajeBanco * 12;
  meses = años * 12;
  ganancias = capital * porcentajeBancoAño * años;
  capitalfinal = capital * meses;
  gananciaFinal = capitalfinal + ganancias;

  const gananciasPorMes = ganancias / meses;

  alert("Después de " + años + " años, usted ganará: $" + ganancias + " con una ganancia total de: $" + gananciaFinal + "\nGanancias por mes: $" + gananciasPorMes.toFixed(2));
}





    function promedio() { 
    //Definir las calificaciones del alumno
    let nombre = prompt("Ingrese nombre");
    let materia = prompt("Ingrese materia");
    let nota1 = parseInt(prompt("Ingrese la primera calificación:"));
    let nota2 = parseInt(prompt("Ingrese la segunda calificación:"));
    let nota3 = parseInt(prompt("Ingrese la tercera calificación:"));
    let nota4 = parseInt(prompt("Ingrese la cuarta calificación:"));
    let nota5 = parseInt(prompt("Ingrese la quinta calificación:"));
   
    // Calcular el promedio
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    

    // Verificar si el alumno aprueba o reprueba
    if (promedio >= 6.2) {
    alert("El alumno: " + nombre + " con materia " + materia + " ha aprobado con un promedio de " + promedio);
    } 
    else {
    alert("El alumno: " + nombre + " con materia " + materia + " ha reprobado con un promedio de " + promedio);
    }
    

  }

function mayor() {
    // Se definen los números a comparar
    let numero1 = parseInt(prompt("Ingrese el primer número"));
    let numero2 = parseInt(prompt("Ingrese el segundo número"));

    // Se averigua cuál es el número mayor

    if (numero1 == numero2){
    alert("Son iguales");
    }
    else if(numero1>numero2){
    alert("El número mayor es: " +numero1);
    }
    else{
    alert("El número mayor es: " +numero2);
    }

}

function menor() {

    // Se definen los números a comparar
    let numero1 = parseInt(prompt("Ingrese el primer número"));
    let numero2 = parseInt(prompt("Ingrese el segundo número"));
    let numero3 = parseInt(prompt("Ingrese el tercer número"));

    // Se averigua cuál es el número menor
    if (numero1 == numero2 && numero2 == numero3){
    alert("Son iguales");
    }
    else if(numero1 < numero2 && numero1 < numero3) {
    alert("El número menor es: " +numero1);
    } 
    else if(numero1 > numero2 && numero2 == numero3) {
    alert("El número menor es el segundo y el tercero = : " + numero2);
    }
    else if(numero1 < numero2 && numero1 == numero3) {
    alert("El número menor es el primero y el tercero = : " + numero3);
    }
    else if(numero1 == numero2 && numero2 < numero3) {
    alert("El número menor es el primero y el tercero = : " + numero1);
    } 
    else if (numero2 < numero1 && numero2 < numero3) {
    alert("El numeró menor es: " +numero2);
      } 
    else {
    alert("El numeró menor es: " +numero3);
      }
}

function kilos() {

    // Se definen las variables
    const precioKilo = 4500;
    //Ingreso de datos
    let kilos = parseInt(prompt("Ingrese la cantidad de kilos:"));
    

    //Se aplican los descuentos de acuerdo al número de kilos
    if (kilos >= 0 && kilos <= 2) {
        descuento = 0;
      } else if (kilos === 3) {
        descuento = 0.1;
      } else if (kilos >= 4 && kilos <= 8) {
        descuento = 0.16;
      } else if (kilos >= 9) {
        descuento = 0.2;
      }
    
    //lista de procesos de acuerdo a las variables    
      let subtotal = kilos * precioKilo;
      let montoDescuento = subtotal * descuento;
      let totalPagar = subtotal - montoDescuento;
    
      alert("Con una cantidad de kilos de:  " + kilos + " Se ofrece un descuento de: $ " + montoDescuento + " y deberá pagar: " + totalPagar);


}