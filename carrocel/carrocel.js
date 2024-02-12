function solucao(sequencia) {
  //seu codigo aqui
  const imagens = 7; // Numero total de imagens no carrossel
  let indiceAtual = 0; // indice inicial eh 0

  for (let i = 0; i < sequencia.length; i++) {
    const clique = sequencia[i];

    if (clique === ">") {
      indiceAtual = (indiceAtual + 1) % imagens; // Avanca para a proxima imagem (volta para 0 se estiver na ultima)
    } else if (clique === "<") {
      indiceAtual = (indiceAtual - 1 + imagens) % imagens; // Retrocede para a imagem anterior (volta para a ultima se estiver na primeira)
    }
  }

  // Imprime o indice da imagem exibida
  console.log(indiceAtual);
}

function processData(input) {
  solucao(input);
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
