function calculadora(num1,operador, num2)
  {
    let resultado;
    switch (operador) { 
      case "+": resultado = num1 + num2;
        break;
      case "-": resultado = num1 - num2;
        break;
      case "*": resultado = num1 * num2;
        break;
      case "/": resultado = num1 / num2;
        break;
      default:  resultado = "Operador inexistente" 
        break;
    }
    console.log(resultado);
  } 

num1 = parseInt(prompt("Ingrese un numero ")); 
operador = prompt("Elija operador: +, -, *, / ");
num2 = parseInt(prompt("Ingrese otro numero "));
console.log(num1, num2);


calculadora(num1, operador, num2); 