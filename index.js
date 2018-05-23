butao.onclick = function() {
  var txt = texto.value;
  txt = txt.replace("\n", " ");
  txt = txt.replace(/\.|\,|\(|\)|\?|\:|\;|\- /g, " ");
  var palavras = txt.split(" ");
  var lista = [];
  for (var a = 0; a < palavras.length; a++) {
    var palavra = palavras[a].toString();
    var lstp = palavra.split(" ");
    lista.push(lstp);
  }



  for (var i = 0; i < lista.length; i++) {
    if (lista[i] == " ") {
      document.getElementById("imprime").innerHTML = document.getElementById("imprime").innerHTML + lista[i];
    }else {
      document.getElementById("imprime").innerHTML = document.getElementById("imprime").innerHTML + "<br>" + lista[i];
    }

  }

}
