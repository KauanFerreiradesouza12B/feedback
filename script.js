let botoes = document.querySelectorAll(".botoes button")
botoes.forEach(botao => {
    botao.addEventListener("click", guardarNota)
})

fuction guardarNota(evento) {
    let nota = evento.target.innerText

    localStorage.setItem("nota", nota)
}