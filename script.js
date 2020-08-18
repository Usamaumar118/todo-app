const addInput = document.querySelector('.add-item__form__input')
const addBtn  = document.querySelector('.add-item__form__btn')

const form = document.querySelector('.add-item__form')
const todoList = document.querySelector('.todo__list')

addBtn.addEventListener('click', addListItem)
form.addEventListener('submit', addListItem)



function addListItem(e){
    e.preventDefault()

    let inputValue = addInput.value

    if(inputValue === "" || inputValue === undefined) {
        
        let infoText = document.querySelector('.info-text')

        infoText.innerHTML = 'Write some text 😊'
        infoText.classList.add('info-text__visible')

        setTimeout(() => {infoText.classList.remove('info-text__visible')}, 3000)

    }



    if(inputValue != '' || inputValue == undefined  || e.key == 'Enter'){

    let todoItem = `<li class="todo__list__item">
    <p class="todo__list__item__text">${inputValue}</p>
    <a class="todo__list__item__btn" onclick="deleteItem(event)" href="#"></a>
    <a class="todo__list__item__btn--done" onclick="doneItem(event)" href="#">DONE</a>
</li>`

    todoList.insertAdjacentHTML('afterbegin', todoItem)

    addInput.value = ''
    addInput.focus()

    }

}

let confirmBox = document.querySelector('.confirmation')
let overlayDiv = document.querySelector('.add-item')


function deleteItem(event) {
    event.preventDefault()

    confirmBox.classList.add('confirmation__visible')
    overlayDiv.classList.add('overlay')

    let confirmationBtns = document.querySelectorAll('.confirmation__btn');


    confirmationBtns.forEach( e => {

        e.addEventListener("click", (e) => {

            if(e.target.id == "del"){
                event.target.parentElement.remove()
                confirmBox.classList.remove('confirmation__visible')
                overlayDiv.classList.remove('overlay')
            } else if(e.target.id == "cancel"){
                confirmBox.classList.remove('confirmation__visible')
                overlayDiv.classList.remove('overlay')
            }

        })

    })

}


function doneItem(event){
    event.preventDefault()
    let todoText = event.target.previousElementSibling.previousElementSibling

    todoText.classList.toggle('done')
    event.target.innerHTML = "Undo"

    if (todoText.classList.contains('done')){
    event.target.innerHTML = "done"

    }

}


