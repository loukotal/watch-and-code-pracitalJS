// V4 requirements:
// todoList.addTodo should add objects
// todoList.changeTodo should change the todoText property
// todoList.toggleCompleted should change the completed property

// V5 requirements:
// .displayTodos should show .todoText
// .displayTodos should tell you if .todos is empty
// .displayTodos should show .completed

var todoList = {
    todos: [],
    displayTodos: function() {
        var todo = this.todos;
        // if todo.length === 0, todo.length is false
        // if (!todo.length) {
        if (todo.length === 0) {
            console.log("Your todo list is empty!");
        } else {
            console.log("My todos:");
            var completed = "";
            for (var i = 0; i < todo.length; i++) {
                // if completed === true
                if (todo[i].completed) {
                    // ,,mark'' as done
                    completed = "(x)";
                }
                else {
                    completed = "( )";
                }
                console.log(completed, todo[i].todoText);
                
            }
        }
        console.log("\n");
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

todoList.displayTodos();
todoList.addTodo("item 1")
todoList.addTodo("item 2")
todoList.changeTodo(0, "changed first item")
todoList.removeTodo(1);
todoList.toggleCompleted(0);
todoList.toggleCompleted(0);
todoList.toggleCompleted(0);


