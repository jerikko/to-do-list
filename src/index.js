import ToDoItem from './ToDoItem.js'
import Project from './Project.js'

console.log('test')

const body = document.querySelector('body')


// test button
function createBtn() {
    const container = document.createElement('div')
    container.classList.add('container')
    const btn = document.createElement('button')
    btn.textContent = 'Click'
    btn.addEventListener('click', function() {
        const toDoItem = new ToDoItem('Project.js', 
                                        'Build out Project class', 
                                        'July 26, 2021')
        console.log(toDoItem.info)

        const project = new Project('To-Do List app',
                                    'Build out To-Do List app',
                                    'July 28, 2021')
        console.log(project)
        project.addToDoItem(toDoItem)
        console.log(project.info)
        console.log(project.items.toString())
    })
    
    body.appendChild(container)
    container.appendChild(btn)
}

createBtn()