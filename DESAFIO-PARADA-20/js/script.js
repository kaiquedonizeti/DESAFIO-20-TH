

function calcular_media() {
    let nota1 = parseFloat(document.getElementById("nota_1").value)
    let nota2 = parseFloat(document.getElementById("nota_2").value)
    let nota3 = parseFloat(document.getElementById("nota_3").value)
    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 6) {
        alert(` Aprovado, sua media foi = ${media}`)
    } else {
        alert(`Reprovado sua media foi ${media}`)
    }
}