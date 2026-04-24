function minhaFuncao() {
    document.write("Olá são lucas!");
    document.write("<br><a href='./index.html'>Voltar</a>");
    alert("fim!");
}

function pergunta() {
    let nome = prompt("Qual é o seu nome?");
    document.getElementById("res1").innerHTML = "seu nome é " + nome;
}

function mostraTexto() {
    let texto = document.getElementById("entrada").value;
    document.getElementById("res2").innerHTML = "Você escreveu: " + texto;
}

function soma() {
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