/* Var
// Seção de Declarações das variáveis 
      numero, fatorial, contador : inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

   escreval ("Digite o numero para caucular o fatorial:")
   leia (numero)
   fatorial := 1
   para contador de 1 ate numero faca
        fatorial := fatorial * contador
   fimpara
   escreval ("O fatorial de", numero, " é:", fatorial)
Fimalgoritmo
*/

function acaoBotao() {
    /* contadpr tambem pode vir nas variaves em vez de colocar o termo var contador */
    var numero, fatorial,
    numero = prompt("Digite o numero para caucular o fatorial:")
    fatorial = 1
    for (var contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador
    }
    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial
}



