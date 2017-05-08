var todoList = {
    todos: [],
    displayTodos: function() {
        console.log(this.todos);
    },
    addTodo: function(toAdd) {
        this.todos.push(toAdd);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    removeTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
    
};


todoList.addTodo("item 1")
todoList.addTodo("item 2")
todoList.changeTodo(0, "changed")
todoList.removeTodo(1);


