const input = document.querySelector ('.input-task')
const button = document.querySelector ('.button-add-task')
const lista = document.querySelector ('.list-task')

let items = []

function adicionarTarefa () {
   items.push ({
    tarefa: input.value,
    concluida: false
   })
   input.value = ''

   mortrarTarefa ()
}



function mortrarTarefa () {
    let novaLi = ''

    items.forEach ( (item, posição) => {
        novaLi = novaLi + `
        <li class="tasks ${item.concluida && "done"}">
            <img src="./checked.png" alt="checked" onclick="concluirTarefa (${posição})">
            <p>${item.tarefa}</p>
            <img src="./trash.png" alt="trash" onclick="deletarItem (${posição})">
        </li>
        `
    })
    lista.innerHTML = novaLi 

    localStorage.setItem ('lista',JSON.stringify (items) )
}



function concluirTarefa (posição) {
    items [posição].concluida = !items [posição].concluida 
    mortrarTarefa ()

}


function deletarItem (posição) {
    items.splice(posição, 1)
    console.log (posição)
    mortrarTarefa ()
}


function recarregarTarefas () {
    const tarefaLocalStorage = localStorage.getItem ('lista')

    if (tarefaLocalStorage) {
        
        items = JSON.parse (tarefaLocalStorage)
    }
    console.log (tarefaLocalStorage)
    mortrarTarefa ()
}

recarregarTarefas ()


button.addEventListener ('click', adicionarTarefa)
alert ('hello world')