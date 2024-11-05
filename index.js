let votar = document.getElementById("votar")
let imagemG = document.getElementById("generico")
 
document.addEventListener("click",function(){
    let pergunta = Number(prompt("Em qual canidato você quer votar: \n(6)Bruna \n(21)otto\n(8)Arthur \n(24) Bruno"))
   switch (pergunta) {
        case 6:
            let confirmar1 = prompt("Você deseja confirmar seu voto no candidato bruna: (S/N)")
            if (confirmar1 == 'S'){
                alert("Você votou no candidato bruna")  
                imagemG.setAttribute('src', '/Imagens/bruna.jpeg') 
            }
            else{
            alert("Reinicie a pagina e escolha outro candidato")    
        }
        break
        case 24:
        let confirmar2 = prompt("Você deseja confirmar seu voto no candidato bruno: (S/N)")
        if(confirmar2 == 'S'){
            alert("Você votou no candidato bruno")
            imagemG.setAttribute('src', '/Imagens/bruno.jpeg') 
        }    
        else{
            alert("Reinicie a pagina e escolha outro candidato")    
            }
        break
            case 8:
        let confirmar3 = prompt("Você deseja confirmar seu voto no candidato arthur: (S/N)")
        if(confirmar3 == 'S'){
            alert("Você votou no candidato Arthur")
            imagemG.setAttribute('src', '/Imagens/arthur.jpeg') 
        }    
        else{
            alert("Reinicie a pagina e escolha outro candidato")    
            }
        break
            case 21:
        let confirmar4 = prompt("Você deseja confirmar seu voto no candidato otto: (S/N)")
        if(confirmar4 == 'S'){
            alert("Você votou no candidato otto")
            imagemG.setAttribute('src', '/Imagens/otto.jpeg') 
        }    
        else{
            alert("Reinicie a pagina e escolha outro candidato")    
            }
        break
            case 1:
                alert("Você descobriu o candidato secreto ")
        let confirmar5 = prompt("Você deseja confirmar seu voto no candidato secreto otto anão: (S/N)")
        if(confirmar5 == 'S'){
            alert("Você votou no candidato secreto  otto anão")
            imagemG.setAttribute('src', '/Imagens/otto anao.jpeg') 
        }    
        else{
            alert("Reinicie e escolha outro candidato")    
            }
            break
 
   }

})
 