/*Var
// Seção de Declarações das variáveis 
         Nome: caracter
         Numero: Real
         

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
      Escreval("Digite o Nome:")
      leia(Nome)
      Escreval("Digite o Numero:")
      leia(Numero)
      
      Escreval(Nome, ":" ,Numero)
      */

      var nome, numero;

      nome = prompt("Digite seu nome:")
      numero = prompt("Digite seu numero:")
      
      document.getElementById("paragrafo").innerText = nome + " : " + numero;