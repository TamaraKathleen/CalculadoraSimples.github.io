var noper = document.querySelector(".oper");

 function calcNum(num) {
    if (typeof gvisor == 'undefined') {
       document.calcform.visor.value = '';
    }
    document.calcform.visor.value = document.calcform.visor.value + num;
    gvisor = 1;
 }
 
 // Função que limpa a calculadora e todas as variáveis existentes.
 function calcLimpar() {
    document.calcform.visor.value = '';
    delete gvalor;
    delete goper;
    delete gvisor;
 }
 
 // Função que executa as operações básicas da calculadora
 function calcOper(noper, valor1, valor2) {
    if (noper == "somar") {
       var valor = parseFloat(valor1) + parseFloat(valor2);
    } else {
       if (noper == "subtrair") {
          var valor = valor1 - valor2;
       } else {
          if (noper == "multiplicar") {
             var valor = valor1 * valor2;
          } else {
             var valor = valor1 / valor2;
          }
       }
    }
 
    return(valor);
 }
 
 // Função do algoritmo de "passagem" das ações do usuário
 function calcParse(noper) {
    var valor = document.calcform.visor.value;
    delete gvisor;
 
    if (typeof goper != 'undefined' && noper == 'resultado') {
       gvalor = calcOper(goper, gvalor, valor);
       document.calcform.visor.value = gvalor;
       delete noper;
       delete gvalor;
       return(0);
    }
 
    if (typeof gvalor != 'undefined') {
       gvalor = calcOper(goper, gvalor, valor);
       goper = oper;
       document.calcform.visor.value = gvalor;
    } else {
       gvalor = valor;
       goper = noper;
    }
 
 }