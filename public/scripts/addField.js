//procurar o botao
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
    //Duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: tru or false

    // Limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo, limpar
    fields.forEach(function(field) {
        // Pegar o fields do momento
        field.value = ""
    })

    // Colocar as páginas: Onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    

    