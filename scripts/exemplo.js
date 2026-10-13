// console.log("batata"); - aparece no console
// alert("frita") - aparece na tela
// prompt("123") - aparece na tela e pede algo

// const - nunca muda o valor
// let - muda o valor

// var - não é usado

const footer = document.getElementById("rodape")
footer.style.backgroundColor = "grey"

const h2Criado = document.createElement("h2")
h2Criado.textContent = "Criando um h2 no footer"
footer.appendChild(h2Criado)

h2Criado.addEventListener("click", () => {
    alert("funcionou")
})

const forms = document.getElementById("formulario")
forms.addEventListener("submit", (event) => {
    event.preventDefault()
    alert("nao enviou nada")
})

h2Criado.addEventListener("mouseover", () => {
    alert("pjl")
})