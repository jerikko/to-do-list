export default class ToDoItem  {
    
    constructor ( task, details, dueDate ) {
        this.task = task
        this.details = details
        this.dueDate = dueDate
    }

    addToTaskList() {
        const taskList = document.querySelector('.task-list')
        const newTask = document.createElement('li')
        newTask.textContent = this.task
        taskList.appendChild(newTask)
    }

    get info() {
        return `
        Task: ${this.task} 
        Details: ${this.details}
        Due date: ${this.dueDate}` 
    }

}