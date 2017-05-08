//V4 requirements:
//todoList.addTodo should add objects
//todoList.changeTodo should change the todoText property
//todoList.toggleCompleted should change the completed property

var todoList = {
    todos: [],
    displayTodos: function() {
        console.log(this.todos);
    },
    addTodo: function(todoText) {
        this.todos.push(
            {
                todoText: todoText,
                completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    removeTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        //more logical
        todo.completed = !todo.completed;
        // my clunky implementation
        // if(this.todos[position].completed) {
        //     this.todos[position].completed = false;
        // } else {
        //     this.todos[position].completed = true;
        // }
        this.displayTodos();
    }
    
};


todoList.addTodo("item 1")
todoList.addTodo("item 2")
todoList.changeTodo(0, "changed")
todoList.removeTodo(1);
todoList.toggleCompleted(0);
todoList.toggleCompleted(0);
todoList.toggleCompleted(0);


