function minhaFuncao() {
    document.write("Olá são lucas!");
    document.write("<br><a href='./index.html'>Voltar</a>");
    alert("fim!");
}

function pergunta() {
    let nome = prompt("Qual é o seu nome?");
    document.getElementById("res1").innerHTML = "seu nome é " + nome;
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
        if (media > 8) {
            document.getElementById("res4").innerHTML = "Média maior que 8 não aceita.";
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
        document.getElementById("res5").innerHTML = "R$ " + reais.toFixed(2) + " equivalem a US$ " + dolares.toFixed(2);
    } catch (error) {
        document.getElementById("res5").innerHTML = "Erro ao buscar cotação. Tente novamente.";
        console.error(error);
    }
}

function calcularAreaPrompt() {
    let altura = parseFloat(prompt("Digite a altura do terreno em metros:"));
    let largura = parseFloat(prompt("Digite a largura do terreno em metros:"));
    if (isNaN(altura) || isNaN(largura)) {
        alert("Digite valores válidos!");
    } else {
        let area = altura * largura;
        document.getElementById("res7").innerHTML = "A área do terreno é: " + area.toFixed(2) + " m²";
    }
}

function AntecessorSucessor() {
    let numero = parseInt(prompt("Digite um número inteiro:"));
    if (isNaN(numero)) {
        alert("Digite um valor vizinho ");
    } else {
        let antecessor = numero - 1;
        let sucessor = numero + 1;
        document.getElementById("res9").innerHTML = "O antecessor de " + numero + " é " + antecessor + " e o sucessor é " + sucessor;
    }
}
function ParOuImpar() {
    let numero = parseInt(prompt("Digite um número "));
    if (isNaN(numero)) {
        alert("Digite um valor válido!");
    } else {
        let status = numero % 2 === 0 ? "Par" : "Ímpar";
        document.getElementById("res10").innerHTML = "O número " + numero + " é " + status;
    }
}
function RadardeVelocidade() {
    let velocidade = parseFloat(prompt("Digite a velocidade do veículo em km/h:"));
    if (isNaN(velocidade)) {
        alert("Digite um valor válido!");
    } else {
        if (velocidade > 120) {
            document.getElementById("res11").innerHTML = "INFRAÇÃO GRAVÍSSIMA!";
        } else if (velocidade > 80) {
            document.getElementById("res11").innerHTML = "MULTADO!";
        } else {
            document.getElementById("res11").innerHTML = "Velocidade dentro do limite.";
        }
    }
}
function MaiordeIdade() {
    let idade = parseInt(prompt("Digite a idade:"));
    if (isNaN(idade)) {
        alert("Digite um valor válido!");
    } else {
        let status = idade >= 18 ? "Xiru pode Dirigir" : "Xiru e frandinha não pode dirigir";
        document.getElementById("res12").innerHTML = status;
    }
}
function CalculadoraIMC() {
    let peso = parseFloat(prompt("Digite seu peso em kg:"));
    let altura = parseFloat(prompt("Digite sua altura em metros:"));
    if (isNaN(peso) || isNaN(altura)) {
        alert("Digite valores válidos!");
    } else {
        let imc = peso / (altura * altura);
        let mensagem = imc < 25 ? "Você está no peso ideal." : "Atenção: Você está acima do peso ideal.";
        document.getElementById("res13").innerHTML = "Seu IMC é " + imc.toFixed(2) + ". " + mensagem;
    }
}

function SimuladorDesconto() {
    let valor = parseFloat(prompt("Digite o valor total da compra:"));
    if (isNaN(valor)) {
        alert("Digite um valor válido!");
    } else {
        let desconto = valor > 500 ? 0.15 : 0.05;
        let valorFinal = valor * (1 - desconto);
        document.getElementById("res14").innerHTML = "O valor final da sua compra é R$ " + valorFinal.toFixed(2);
    }
}

function ComparadorNumeros() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    if (isNaN(num1) || isNaN(num2)) {
        alert("Digite valores válidos!");
    } else if (num1 === num2) {
        alert("Os números devem ser diferentes!");
    } else {
        let maior = num1 > num2 ? num1 : num2;
        let menor = num1 < num2 ? num1 : num2;
        document.getElementById("res15").innerHTML = "O número " + maior + " é maior que o número " + menor;
    }
}
function ClassificacaoTriangulos() {
    let lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado:"));
    let lado2 = parseFloat(prompt("Digite o comprimento do segundo lado:"));
    let lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado:"));
  if(lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        document.getElementById("res16").innerHTML = "Os lados fornecidos não formam um triângulo.";
        return;
    }   
    
     if(lado1 == lado2 && lado2 == lado3) { 
        document.getElementById("res16").innerHTML = "O triângulo é Equilátero.";
     }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        document.getElementById("res16").innerHTML = "O triângulo é Isósceles.";
     }else {
        document.getElementById("res16").innerHTML = "O triângulo é Escaleno.";
     }
}
function MenuBebidas() {
    let opcao = prompt("Escolha uma bebida: 1 - suco, 2 - refrigerante ou 3 - agua");

    switch (opcao) {
        case "1":
            document.getElementById("res17").innerHTML = "Você escolheu suco!";
            break;

        case "2":
            document.getElementById("res17").innerHTML = "Você escolheu refrigerante!";
            break;

        case "3":
            document.getElementById("res17").innerHTML = "Você escolheu água!";
            break;

        default:
            document.getElementById("res17").innerHTML = "Opção inválida!";
    }
}
              