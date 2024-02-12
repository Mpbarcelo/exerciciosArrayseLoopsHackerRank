function solucao(stringCorrompida) {
  const caracteresEspeciais = "!@#$%&*()";
  let stringPurificada = "";

  for (let i = 0; i < stringCorrompida.length; i++) {
    const caractereAtual = stringCorrompida[i];

    // Verifica se o caractere atual não está na lista de caracteres especiais
    if (caracteresEspeciais.indexOf(caractereAtual) === -1) {
      // Adiciona o caractere à nova string purificada
      stringPurificada += caractereAtual;
    }
  }

  // Imprime o resultado
  console.log(stringPurificada);
}

function processData(input) {
  solucao(input.trim()); // Remove espaços em branco extras
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
