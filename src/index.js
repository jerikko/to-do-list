import ToDoItem from './ToDoItem.js'
import Project from './Project.js'
import EventListeners from './EventListeners.js'
import './style.css'


const inputs = document.querySelectorAll('input')

// Clears input box values on window refresh
function init() {
    Array.from(inputs).forEach(input => {
        if (!input.classList.contains('button')) input.value = ''
    })
}


EventListeners()
init()
