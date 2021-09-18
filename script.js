const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

const nomeReceita = document.querySelector(".modal .nome-receita")
const nomeAutor = document.querySelector(".modal .autor-receita")
const imgReceita = document.querySelector(".modal img")

const fecharModal = document.querySelector(".modal .fechar-modal")

for(let card of cards){
    card.addEventListener("click", function(){
        modalOverlay.classList.add("active")

        // Recuperar o nome da receita:
        nomeReceitas = card.querySelector(".nome-receita").innerHTML
        nomeReceita.innerHTML = `${nomeReceitas}`

        // Recuperar o nome do autor da receita:
        nomeAutores = card.querySelector(".autor-receita").innerHTML
        nomeAutor.innerHTML = `${nomeAutores}`

        // Recuperar a imagem da receita:
        srcReceita = card.querySelector("img").src
        imgReceita.src = `${srcReceita}`
    })
}

fecharModal.addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})