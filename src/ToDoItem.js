export default class ToDoItem  {
    
    constructor ( title, description, dueDate ) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
    }
    
    get info() {
        return `
        Title: ${this.title}, 
        Description: ${this.description}, 
        Due date: ${this.dueDate}` 
    }

}