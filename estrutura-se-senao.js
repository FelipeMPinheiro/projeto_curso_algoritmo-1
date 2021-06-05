/* Calculadora
Var
// Seção de Declarações das variáveis 
      valor01, valor02, resultado: real
      operacao: caracter

      

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
      escreval("Calcular a resposta de uma operação a sua escolha!")
      escreval("Digite o primeiro valor:")
      leia(valor01)
      escreva("Digite a operação! Ex: + - * /")
      leia(operacao)
      escreval("Digite o segundo valor:")
      leia(valor02)
      
      se operacao = "+"   entao
         resultado := valor01 + valor02
      senao
         se operacao = "-" entao
            resultado := valor01 - valor02
         senao
            se operacao = "*"  entao
               resultado := valor01 * valor02
            senao
                se operacao = "/"  entao
                   resultado := valor01 / valor02
                fimse
            fimse
         fimse
       fimse
       escreval("Resultado do calculo é:",resultado)
         
         
*/

function acaoBotao() {
    var valor01, valor02, resultado, operacao
    valor01 = prompt("Digite o primiro valor: ")
    operacao = prompt("Digite a operação! Ex: + - * / ")
    valor02 = prompt("Digite o segunto valor: ")

    if (operacao == "+"){   
        resultado = parseInt( valor01 ) + parseInt( valor02 )
    }else if(operacao == "-"){
        resultado = parseInt( valor01 ) - parseInt( valor02 )
    }else if(operacao == "*" ){
        resultado = parseInt( valor01 ) * parseInt( valor02 )
    }else if(operacao == "/"){
        resultado = parseInt( valor01 ) / parseInt( valor02 )
    }
    document.getElementById("paragrafo").innerText = resultado
}

        
