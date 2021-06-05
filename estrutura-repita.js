/*Var
// Seção de Declarações das variáveis 
    sairloop:caracter
    valor01, valor02 :real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
       repita
       escreval("Digite o primeiro valor: ")
       leia (valor01)
       escreval("Digite o segundo valor: ")
       leia (valor02)
       escreval("Resultado:", valor01 + valor02)
       escreval("deseja sair? S/N")
       leia (sairloop)
       ate sairloop <> "N"
*/
function acaoBotao() {
    var sairloop, valor01, valor02
    do{
        valor01 = prompt ("Digite o primeiro valor: ")
        valor02 = prompt ("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt( valor01 ) + parseInt( valor02 ) )
        sairloop = prompt("Deseja sair? S/N")        
    }while(sairloop == "N")         
}
