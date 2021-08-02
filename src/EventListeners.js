import ToDoItem from "./ToDoItem.js"
import Project from "./Project.js"

export default function EventListeners() {
    const projectForm = document.querySelector('form.add-project')
    const taskForm = document.querySelector('form.add-task')
    const buttons = document.querySelectorAll('.button')

    
    Array.from(buttons).forEach(button => {
        button.addEventListener('click', e => {

            // prevents page refresh
            e.preventDefault()

            if (button.classList.contains('add-project')) {

                let title = document.querySelector('.add-project.title').value
                let description = document.querySelector('.add-project.description').value
                let dueDate = document.querySelector('.add-project.due-date').value
                
                
                if (title == '' || description == '' || dueDate == '') {
                    alert('Please fill out all fields.')
                    return
                }
    

                const project = new Project(title, description, dueDate)
                project.addToProjectList()
                projectForm.reset()
            }
            if (button.classList.contains('add-task')) {

                let taskTitle = document.querySelector('.add-task.title').value
                let details = document.querySelector('.add-task.details').value
                let dueDate = document.querySelector('.add-task.due-date').value
                

                if (taskTitle == '' || details == '' || dueDate == '') {
                    alert('Please fill out all fields.')
                    return
                }


                const task = new ToDoItem(taskTitle, details, dueDate)
                task.addToTaskList()
                taskForm.reset()
            }
        })
    })
}