function solucao(precos) {
  //seu codigo aqui
  // Ordenar os precos em ordem crescente
  precos.sort((a, b) => a - b);

  // Se o numero de produtos for menor que 5, o cliente paga o preco total
  if (precos.length < 5) {
    console.log(precos.reduce((soma, preco) => soma + preco, 0));
    return;
  }

  // Calcular o total sem o desconto
  let totalSemDesconto = precos.reduce((soma, preco) => soma + preco, 0);

  // Encontrar o menor preco
  let menorPreco = precos[0];

  // Subtrair o menor preco do total para obter o total com desconto
  let totalComDesconto = totalSemDesconto - menorPreco;

  // Imprimir o total com desconto
  console.log(totalComDesconto);
}

function processData(input) {
  solucao(
    input
      .trim()
      .split(" ")
      .filter((x) => x)
      .map((x) => parseInt(x, 10))
  );
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
