/*
    passou := falso
    escreval("Digite nome do aluno:")
    leia(nome)
    escreval("Digite a nota01 do aluno:")
    leia(nota01)
    escreval("Digite a nota02 do aluno:")
    leia(nota02)
    media := (nota01 + nota02)/ 2

    se media >= 50 entao
        passou := verdadeiro
        
    fimse

    se (passou) && (meida >= 50 || media <= 70 ) entao
    escreval("Reprovado", nome)
    senao
    escreval("Aprovado", nome)

 fimse*/

 var nome , nota01 ,nota02 , media, passou
 passou=false

nome=prompt("Digite nome do aluno:")
nota01=prompt("Digite a nota 01 do aluno:")
nota02=prompt("Digite a nota 02 do aluno:")

media = (parseInt(nota01) + parseInt(nota02)) / 2

if(media >= 50)
    passou=true)
    if(passou && media >= 70)
    alert("Aprovado!" + nome)
else
    alert("Reprovado!" + nome)