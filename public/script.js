const cards = document.querySelectorAll(".card");

for(let card of cards){
    card.addEventListener("click", function(){
        const index = card.getAttribute('id')
        window.location.href = `/recipe/${index}`
    })
}

/* MOSTRAR - ESCONDER INGREDIENTES */
const buttonIngredients = document.querySelector(".buttoningredients");
const ingredientsItem = document.querySelector(".recipe-ingredients");

buttonIngredients.addEventListener("click", function(){
    buttonIngredients.innerHTML == 'MOSTRAR' ? (
        buttonIngredients.innerHTML = 'ESCONDER', ingredientsItem.classList.remove('active')
    ) : (
        buttonIngredients.innerHTML = 'MOSTRAR', ingredientsItem.classList.add('active'))
})

/* MOSTRAR - ESCONDER - MODO DE PREPARO */
const buttonPreparation = document.querySelector(".buttonPreparation");
const preparationItem = document.querySelector(".recipe-preparation");

buttonPreparation.addEventListener("click", function(){
    buttonPreparation.innerHTML == 'MOSTRAR' ? (
        buttonPreparation.innerHTML = 'ESCONDER', preparationItem.classList.remove('active')
    ) : (
        buttonPreparation.innerHTML = 'MOSTRAR', preparationItem.classList.add('active'))
})

/* MOSTRAR - ESCONDER - INFORMAÇOES */
const buttonInformation = document.querySelector(".buttonInformation");
const informationItem = document.querySelector(".recipe-information");

buttonInformation.addEventListener("click", function(){
    buttonInformation.innerHTML == 'MOSTRAR' ? (
        buttonInformation.innerHTML = 'ESCONDER', informationItem.classList.remove('active')
    ) : (
        buttonInformation.innerHTML = 'MOSTRAR', informationItem.classList.add('active'))
})