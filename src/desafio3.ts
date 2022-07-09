// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
const atualizarSaldo = document.getElementById('atualizar-saldo') as HTMLElement;
const botaoLimpar = document.getElementById('limpar-saldo') as HTMLElement;
const soma = document.getElementById('soma') as HTMLInputElement;
const campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

let saldo = 0
campoSaldo.innerHTML = '0'

function somarAoSaldo(valor: number) {
    saldo += valor
    soma.value = ''
    campoSaldo.innerHTML = saldo.toString();
}

function limparSaldo() {
    saldo = 0
    campoSaldo.innerHTML = saldo.toString();
}

atualizarSaldo.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/*
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */