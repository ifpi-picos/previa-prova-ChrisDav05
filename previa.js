export function maiorNumero(listaNum){
    if (listaNum.length > 0){
       return Math.max(...listaNum)
    } else if (listaNum.length === 0){
        return null 
    } else if (typeof(listaNum) == typeof("")) {
        return null
    }
}

export function verificarParOuImpar(numero){
    if (typeof(numero) == typeof(1)){
        if (numero%2 === 0){
            return ("Par")
        } else if (numero%2 !== 0){
            return ("Ímpar")
        }
    }else{
        return null
    }
    }

export function contarCaracterA(str){
    let contador = 0;
    let ind = 0;

    while (ind < str.length){
        if (str[ind] === 'a' || str[ind] === 'A') {
        contador++
    }
    ind++
}
return contador
}

export function atualizarPropriedade(objeto, nomeprop, novoValor) {
    if (objeto[nomeprop] !== null) {
        objeto[nomeprop] = novoValor;  
        return objeto;  
    } else {
        return null; 
    }
}