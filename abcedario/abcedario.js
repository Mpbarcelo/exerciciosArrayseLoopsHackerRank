function solucao(letra, palavras) {
  let criancasPerderam = 0;

  for (const palavra of palavras) {
    // Comparando diretamente o primeiro caractere da palavra com a letra sorteada em minúsculo
    if (palavra[0].toLowerCase() !== letra) {
      criancasPerderam++;
    }
  }

  console.log(criancasPerderam);
}

function processData(input) {
  const { letra, palavras } = JSON.parse(input)[0];
  solucao(letra, palavras);
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
