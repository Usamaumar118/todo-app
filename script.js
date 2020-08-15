const addInput = document.querySelector('.add-item__form__input')
const addBtn  = document.querySelector('.add-item__form__btn')

const form = document.querySelector('.add-item__form')
const todoList = document.querySelector('.todo__list')

addBtn.addEventListener('click', addListItem)
form.addEventListener('submit', addListItem)



function addListItem(e){
    e.preventDefault()
    console.log(e)

    let inputValue = addInput.value

    if(inputValue != '' || inputValue == undefined  || e.key == 'Enter'){

    let todoItem = `<li class="todo__list__item">
    <p class="todo__list__item__text">${inputValue}</p>
    <a class="todo__list__item__btn" onclick="deleteItem(event)" href="#"></a>
    </li>`

    todoList.insertAdjacentHTML('afterbegin', todoItem)

    addInput.value = ''
    addInput.focus()

    }

}

function deleteItem(event) {
    event.preventDefault()
    event.target.parentElement.remove()
}