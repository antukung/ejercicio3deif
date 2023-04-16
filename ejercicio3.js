let numeroUnoIngresado= prompt ("ingrese un numero");
let numeroDosIngresado= prompt ("ingrese un segundo numero");
let numeroTresIngresado= prompt ("ingrese el tercer numero");

if ((numeroUnoIngresado==numeroDosIngresado)&&(numeroDosIngresado==numeroTresIngresado)&&(numeroTresIngresado==numeroUnoIngresado)) {
    alert ("ganaste el primer premio");
} else if((numeroUnoIngresado==numeroDosIngresado)||(numeroDosIngresado==numeroTresIngresado)||(numeroUnoIngresado==numeroTresIngresado)){
    alert ("ganaste el segundo premio")
} else {
    alert ("ganaste un helado")
}