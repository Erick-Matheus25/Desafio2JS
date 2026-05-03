function minhaFuncao() {
    document.getElementById("res1").innerHTML = "Olá São Lucas!<br><a href='./index.html'>Voltar</a>";
    alert("fim!");
}

function pergunta() {
    let nome = prompt("Qual é o seu nome?");
    document.getElementById("res1").innerHTML = "Seu nome é " + nome;
}

function mostrarTexto() {
    let texto = document.getElementById("campo1").value;
    document.getElementById("res2").innerHTML = "Você escreveu: " + texto;
}

function somar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Digite números válidos!");
    } else {
        let resultado = num1 + num2;
        document.getElementById("res3").innerHTML = num1 + " + " + num2 + " = " + resultado;
    }
}
function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Digite notas válidas!");
    } else {
        let media = (nota1 + nota2 + nota3) / 3;

        if (media > 10) {
            document.getElementById("res4").innerHTML = "Média inválida.";
            return;
        }

        let status = media >= 7 ? "Aprovado" : "Reprovado";
        document.getElementById("res4").innerHTML = "A média é: " + media.toFixed(2) + " — " + status;
    }
}

async function converterDolar() {
    let reais = parseFloat(document.getElementById("reais").value);
    if (isNaN(reais)) {
        alert("Digite um valor válido em Reais!");
        return;
    }
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
        const data = await response.json();
        const cotacao = parseFloat(data.USDBRL.bid);

        let dolares = reais / cotacao;

        document.getElementById("res5").innerHTML =
            "R$ " + reais.toFixed(2) + " equivalem a US$ " + dolares.toFixed(2);

    } catch (error) {
        document.getElementById("res5").innerHTML = "Erro ao buscar cotação.";
    }
}

function calcularAreaPrompt() {
    let altura = parseFloat(prompt("Digite a altura do terreno:"));
    let largura = parseFloat(prompt("Digite a largura do terreno:"));

    if (isNaN(altura) || isNaN(largura)) {
        alert("Digite valores válidos!");
    } else {
        let area = altura * largura;
        document.getElementById("res7").innerHTML = "Área: " + area.toFixed(2) + " m²";
    }
}

function AntecessorSucessor() {
    let numero = parseInt(prompt("Digite um número inteiro:"));

    if (isNaN(numero)) {
        alert("Digite um valor válido!");
    } else {
        let antecessor = numero - 1;
        let sucessor = numero + 1;

        document.getElementById("res9").innerHTML =
            "Antecessor: " + antecessor + " | Sucessor: " + sucessor;
    }
}

function ParOuImpar() {
    let numero = parseInt(prompt("Digite um número"));

    if (isNaN(numero)) {
        alert("Digite um valor válido!");
    } else {
        let status = numero % 2 === 0 ? "Par" : "Ímpar";
        document.getElementById("res10").innerHTML = "O número é " + status;
    }
}

function RadardeVelocidade() {
    let velocidade = parseFloat(prompt("Digite a velocidade:"));

    if (isNaN(velocidade)) {
        alert("Digite um valor válido!");
    } else {
        if (velocidade > 120) {
            document.getElementById("res11").innerHTML = "INFRAÇÃO GRAVÍSSIMA!";
        } else if (velocidade > 80) {
            document.getElementById("res11").innerHTML = "MULTADO!";
        } else {
            document.getElementById("res11").innerHTML = "Velocidade normal.";
        }
    }
}

function MaiordeIdade() {
    let idade = parseInt(prompt("Digite a idade:"));

    if (isNaN(idade)) {
        alert("Digite um valor válido!");
    } else {
        let status = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";
        document.getElementById("res12").innerHTML = status;
    }
}

function CalculadoraIMC() {
    let peso = parseFloat(prompt("Digite seu peso:"));
    let altura = parseFloat(prompt("Digite sua altura:"));

    if (isNaN(peso) || isNaN(altura)) {
        alert("Digite valores válidos!");
    } else {
        let imc = peso / (altura * altura);

        let mensagem = imc < 25
            ? "Peso ideal"
            : "Acima do peso";

        document.getElementById("res13").innerHTML =
            "IMC: " + imc.toFixed(2) + " — " + mensagem;
    }
}

function SimuladorDesconto() {
    let valor = parseFloat(prompt("Digite o valor:"));

    if (isNaN(valor)) {
        alert("Digite um valor válido!");
    } else {
        let desconto = valor > 500 ? 0.15 : 0.05;
        let total = valor * (1 - desconto);

        document.getElementById("res14").innerHTML =
            "Total com desconto: R$ " + total.toFixed(2);
    }
}

function ComparadorNumeros() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Valores inválidos!");
    } else if (num1 === num2) {
        alert("Números iguais!");
    } else {
        let maior = num1 > num2 ? num1 : num2;
        let menor = num1 < num2 ? num1 : num2;

        document.getElementById("res15").innerHTML =
            maior + " é maior que " + menor;
    }
}

function ClassificacaoTriangulos() {
    let l1 = parseFloat(prompt("Lado 1:"));
    let l2 = parseFloat(prompt("Lado 2:"));
    let l3 = parseFloat(prompt("Lado 3:"));

    if (l1 + l2 <= l3 || l1 + l3 <= l2 || l2 + l3 <= l1) {
        document.getElementById("res16").innerHTML = "Não forma triângulo";
        return;
    }

    if (l1 === l2 && l2 === l3) {
        document.getElementById("res16").innerHTML = "Equilátero";
    } else if (l1 === l2 || l1 === l3 || l2 === l3) {
        document.getElementById("res16").innerHTML = "Isósceles";
    } else {
        document.getElementById("res16").innerHTML = "Escaleno";
    }
}

function MenuBebidas() {
    let opcao = prompt("1-Suco 2-Refrigerante 3-Água");

    switch (opcao) {
        case "1":
            document.getElementById("res17").innerHTML = "Suco";
            break;
        case "2":
            document.getElementById("res17").innerHTML = "Refrigerante";
            break;
        case "3":
            document.getElementById("res17").innerHTML = "Água";
            break;
        default:
            document.getElementById("res17").innerHTML = "Inválido";
    }
}

function VogalOuConsoante() {
    let letra = prompt("Digite uma letra:");

    if (!letra || letra.length !== 1) {
        document.getElementById("res18").innerHTML = "Digite apenas 1 letra!";
        return;
    }

    letra = letra.toLowerCase();

    if ("aeiou".includes(letra)) {
        document.getElementById("res18").innerHTML = "Vogal";
    } else {
        document.getElementById("res18").innerHTML = "Consoante";
    }
}

function CalculadoraSimples() {
    let num1 = parseFloat(prompt("Número 1:"));
    let num2 = parseFloat(prompt("Número 2:"));
    let op = prompt("Operação: + - * /");

    switch (op) {
        case "+":
            document.getElementById("res19").innerHTML = num1 + num2;
            break;
        case "-":
            document.getElementById("res19").innerHTML = num1 - num2;
            break;
        case "*":
            document.getElementById("res19").innerHTML = num1 * num2;
            break;
        case "/":
            document.getElementById("res19").innerHTML =
                num2 === 0 ? "Erro" : num1 / num2;
            break;
        default:
            document.getElementById("res19").innerHTML = "Operação inválida";
    }
}

function ConversordeMoedasPro() {
    let valor = parseFloat(prompt("Valor em reais:"));
    let moeda = parseInt(prompt("1-Dólar 2-Euro 3-Peso"));

    if (isNaN(valor) || isNaN(moeda)) {
        document.getElementById("res20").innerHTML = "Erro";
        return;
    }

    switch (moeda) {
        case 1:
            document.getElementById("res20").innerHTML = (valor / 5).toFixed(2);
            break;
        case 2:
            document.getElementById("res20").innerHTML = (valor / 6).toFixed(2);
            break;
        case 3:
            document.getElementById("res20").innerHTML = (valor * 20).toFixed(2);
            break;
        default:
            document.getElementById("res20").innerHTML = "Inválido";
    }
}

function ContagemProgressiva() {
    let texto = "";

    for (let i = 1; i <= 50; i++) {
        texto += i + "<br>";
    }

    document.getElementById("resultado").innerHTML = texto;
}

function TabuadaDinamica() {
    let numero = parseInt(prompt("Digite um número:"));

    if (isNaN(numero)) {
        alert("Número inválido!");
        return;
    }

    let texto = "";

    for (let i = 1; i <= 10; i++) {
        texto += numero + " x " + i + " = " + (numero * i) + "<br>";
    }

    document.getElementById("res22").innerHTML = texto;
}
function SomadordeNúmeros() {
    let entrada = prompt("Digite 5 números separados por espaço:");
    
    if (entrada === null) return; 

    let numeros = entrada.split(" ").map(Number);

    if (numeros.length !== 5 || numeros.some(isNaN)) {
        alert("Digite exatamente 5 números válidos!");
        return;
    }

    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    document.getElementById("res23").innerHTML =
        "A soma total é: " + soma;
}
function ApenasOsPares() {
    let texto = "";

    for (let i = 2; i <= 100; i += 2) {
        texto += i + "<br>";
    }

    document.getElementById("res24").innerHTML = texto;
}
function Fatorial() {
    let numero = prompt("Digite um número:");

    if (numero === null) return;

    numero = parseInt(numero);

    if (isNaN(numero) || numero < 0) {
        alert("Digite um número inteiro válido (>= 0)!");
        return;
    }

    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    document.getElementById("res25").innerHTML =
        "O fatorial de " + numero + " é: " + fatorial;
}

    function ValidacaoDados() {
   let numero = parseFloat(prompt("Digite uma nota de 0 a 10:"));

   while (isNaN(numero) || numero < 0 || numero > 10) {
       numero = parseFloat(prompt("Valor inválido! Digite uma nota de 0 a 10:"));
   }

   document.getElementById("res26").innerHTML = "Nota válida: " + numero;
}
function MediadeIdades() {
    let soma = 0;
    let contador = 0;

    let idade = parseInt(prompt("Digite uma idade (0 para parar):"));

    while (idade !== 0) {

        if (isNaN(idade) || idade < 0) {
            idade = parseInt(prompt("Valor inválido! Digite uma idade válida (0 para parar):"));
            continue;
        }

        soma += idade;
        contador++;

        idade = parseInt(prompt("Digite outra idade (0 para parar):"));
    }

    if (contador === 0) {
        document.getElementById("res27").innerHTML = "Nenhuma idade foi informada.";
    } else {
        let media = soma / contador;
        document.getElementById("res27").innerHTML =
            "Média das idades: " + media.toFixed(2);
    }
}
function ListaNomes() {
    let nomes = [];

    for (let i = 0; i < 5; i++) {
        let nome = prompt("Digite o nome " + (i + 1) + ":");
        if (nome) {
            nomes.push(nome);
        } else {
            alert("Nome inválido! Tente novamente.");
            i--; 
        }
    }
    document.getElementById("res28").innerHTML = "Nomes digitados: " + nomes.join(", ");
}
    function MaiorValorArray() {
        let numeros = [];

        for (let i = 0; i < 5; i++) {
            let numero = parseFloat(prompt("Digite o número " + (i + 1) + ":"));
            if (!isNaN(numero)) {
                numeros.push(numero);
            } else {
                alert("Número inválido! Tente novamente.");
                i--;
            }
        }

        if (numeros.length === 0) {
            document.getElementById("res29").innerHTML = "Nenhum número válido foi digitado.";
        } else {
            let maior = Math.max(...numeros);
            document.getElementById("res29").innerHTML = "O maior valor é: " + maior;
        }
    }
    function InversorOrdem() {
        let numeros = [];

        for (let i = 0; i < 5; i++) {
            let numero = parseFloat(prompt("Digite o número " + (i + 1) + ":"));
            if (!isNaN(numero)) {
                numeros.push(numero);
            } else {
                alert("Número inválido! Tente novamente.");
                i--;
            }
        }

        if (numeros.length === 0) {
            document.getElementById("res30").innerHTML = "Nenhum número válido foi digitado.";
        } else {
            numeros.reverse();
            document.getElementById("res30").innerHTML = "Números em ordem inversa: " + numeros.join(", ");
        }
    }
    function LocalizadordeNomes() {
    let nomes = ["joao", "maria", "carlos", "ana", "pedro"];

    let nomeBuscado = prompt("Digite um nome:");

    if (!nomeBuscado) {
        alert("Digite um nome válido!");
        return;
    }

    nomeBuscado = nomeBuscado.trim().toLowerCase();

    if (nomes.includes(nomeBuscado)) {
        document.getElementById("res31").innerHTML =
            "O nome está na lista!";
    } else {
        document.getElementById("res31").innerHTML =
            "O nome NÃO está na lista.";
    }
}
function FiltroNotas() {
    let notas = [5.5, 7.2, 8.0, 6.9, 9.1, 4.3, 7.5, 8.8, 6.0, 10.0];

    let contador = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > 7.0) {
            contador++;
        }
    }

    document.getElementById("res32").innerHTML =
        "Quantidade de notas acima de 7: " + contador;
}
function LogindeAcesso() {
    let nomes = ["joao", "maria", "carlos", "ana", "pedro"];

    let usuario = prompt("Digite seu login:");

    if (usuario === null || usuario.trim() === "") {
        alert("Login inválido!");
        return;
    }

    usuario = usuario.trim().toLowerCase();

    if (nomes.includes(usuario)) {
        document.getElementById("res33").innerHTML = "Acesso Liberado";
    } else {
        document.getElementById("res33").innerHTML = "Acesso Negado";
    }
}
function MediadeVendasMensais() {
    let vendas = [1500, 2000, 1800, 2200, 1700, 2500, 1900, 2100, 1600, 2300, 2400, 2600];

    let soma = 0;

    for (let i = 0; i < vendas.length; i++) {
        soma += vendas[i];
    }

    let media = soma / vendas.length;

    document.getElementById("res34").innerHTML =
        "Total anual: " + soma + "<br>" +
        "Média mensal: " + media.toFixed(2);
}
function carrinhodeCompras() {
    let nomesprodutos = [];
    let precos = [];

    for (let i = 0; i < 3; i++) {
        let nome = prompt("Digite o nome do produto " + (i + 1) + ":");
        let preco = parseFloat(prompt("Digite o preço do produto " + (i + 1) + ":"));

        if (nome && !isNaN(preco)) {
            nomesprodutos.push(nome);
            precos.push(preco);
        } else {
            alert("Dados inválidos! Tente novamente.");
            i--;
        }
    }

    let total = 0;
    let texto = "<strong>Nota Fiscal:</strong><br>";

    for (let i = 0; i < nomesprodutos.length; i++) {
        texto += nomesprodutos[i] + " - R$ " + precos[i].toFixed(2) + "<br>";
        total += precos[i];
    }

    texto += "<br><strong>Total: R$ " + total.toFixed(2) + "</strong>";

    document.getElementById("res35").innerHTML = texto;
}
