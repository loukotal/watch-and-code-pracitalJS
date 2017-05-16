// V4 requirements:
// todoList.addTodo should add objects
// todoList.changeTodo should change the todoText property
// todoList.toggleCompleted should change the completed property

// V5 requirements:
// .displayTodos should show .todoText
// .displayTodos should tell you if .todos is empty
// .displayTodos should show .completed


// V6: requirements:
// .toggleAll if everything is true make everything false
// .toggleAll otherwise make everything true


// V7 requirements:
// There should be a "Display Todos" button and "Toggle All" button in the app.
// Clicking "Display Todos" should run todoList.displayTodos
// Clicking "Toggle All" should run todoList.toggleAll

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
        debugger;
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
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        // count number of completedTodos
        for (var i = 0; i < totalTodos; i++) {
            if(this.todos[i].completed) {
                completedTodos++;
            }
        }
        // if all todos === true, make them all false
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
                
            }
        }
        this.displayTodos();
        
    }
    
};

// V7: We want to get access to the display todos button
// var displayTodosButton = document.getElementById("displayTodosButton");
// var toggleAllButton = document.getElementById("toggleAllButton");

// displayTodosButton.addEventListener("click", function() {
//     todoList.displayTodos();
// });
// toggleAllButton.addEventListener("click", function(){
//     todoList.toggleAll();
// });

// 1st refactoring: adding handlers object and in the index.html adding onclick attributes
var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    }
};

// todoList.displayTodos();
// todoList.addTodo("item 1")
// todoList.addTodo("item 2")
// todoList.toggleCompleted(0);
// // todoList.toggleCompleted(1);
// todoList.toggleAll();
// todoList.toggleAll();
// todoList.changeTodo(0, "changed first item")
// todoList.removeTodo(1);
// todoList.toggleCompleted(0);



