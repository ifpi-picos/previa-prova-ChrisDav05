export function maiorNumero(listaNum) {
  if (listaNum.length === 0 || !Array.isArray(listaNum)) {
    return null;
  } else {
    return Math.max(...listaNum);
  }
}

export function verificarParOuImpar(numero) {
  if (typeof numero == typeof 1) {
    if (numero % 2 === 0) {
      return "Par";
    } else if (numero % 2 !== 0) {
      return "Ímpar";
    }
  } else {
    return null;
  }
}

export function contarCaracterA(str, letra) {
  if (typeof str === typeof "oi") {
    let palavraMin = str.toLowerCase();
    let contador = 0;
    let indice = 0;
    while (indice <= palavraMin.length - 1) {
      if (palavraMin[indice] === letra) {
        contador++;
        indice++;
      } else {
        indice++;
      }
    }
    return contador;
  } else {
    return null;
  }
}

export function atualizarPropriedade(objeto, nomeprop, novoValor) {
  if (objeto[nomeprop] != null) {
    objeto[nomeprop] = novoValor;
    return objeto;
  } else {
    return null;
  }
}
