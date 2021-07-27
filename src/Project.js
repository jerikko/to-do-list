export default class Project  {
    
    constructor ( title, description, dueDate ) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.items = []
    }

    addToDoItem(toDoItem) {
        this.items.push(toDoItem)
    }
    
    get info() {
        return `
        Title: ${this.title}, 
        Description: ${this.description}, 
        Due date: ${this.dueDate},
        To-Do Items: ${JSON.stringify(this.items)}`
    }

}