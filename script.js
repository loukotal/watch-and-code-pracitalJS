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

// V8 requirements:
// It should have working controls for .addTodo
// It should have working controls for .changeTodo
// It should have working controls for .deleteTodo
// It should have working controls for .toggleCompleted


// V9 requirements:
// There should be an li element for every todo
// Each li element should contain .todoText
// Each li element should show .completed

var todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push(
            {
                todoText: todoText,
                completed: false
        });
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
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
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        if (addTodoTextInput.value !== "") {
            todoList.addTodo(addTodoTextInput.value);
        }
            
        
        
        addTodoTextInput.value = "";
        view.displayTodos();
     },
    changeTodo: function() {
        var changeTodoTextPosition = document.getElementById("changeTodoTextPosition");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");

        if (changeTodoTextPosition.value >= todoList.length || changeTodoTextPosition.value < 0) {
            console.log("index out of bounds.");
            
        } else {
            todoList.changeTodo(changeTodoTextPosition.valueAsNumber, changeTodoTextInput.value);
        }
        changeTodoTextInput.value = "";
        changeTodoTextPosition.value = "";
        view.displayTodos();
    },
    deleteTodo: function() {
        var deleteTodoTextNumber = document.getElementById("deleteTodoTextNumber");

        if (deleteTodoTextNumber.valueAsNumber >= todoList.todos.length || deleteTodoTextNumber.valueAsNumber < 0) {
            console.log("delete index out of bounds");
        } else {
            todoList.deleteTodo(deleteTodoTextNumber.valueAsNumber);
        }
        deleteTodoTextNumber.value = "";
        view.displayTodos();

    },
    toggleCompleted: function() {
        var toggleTodoPositionInput = document.getElementById("toggleTodoPositionInput")
        todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
        toggleTodoPositionInput.value = "";
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
};
var view = {
    displayTodos: function() {
        // grab reference to the ul element in the html file
        var todosUl = document.querySelector("ul");
        // reset the html inside the ul 
        todosUl.innerHTML = "";
        // declare variable used in the for loop, so they dont get re-declared
        var todoLi = "";
        var todoTextWithCompletion = "";
        var todo = "";

        // Handle empty todo list
        if (todoList.todos.length === 0) {
            todoTextWithCompletion = "Your todo list is empty!"
            todoLi = document.createElement("li");
            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        } else {
            for (var i = 0; i < todoList.todos.length; i++) {
                //reference todoList.todos[i] (less typing)
                todo = todoList.todos[i];
                // create li element
                todoLi = document.createElement("li");

                // change todoTextWithCompletion based on if completed or not
                if (todo.completed) {
                    todoTextWithCompletion = "(x) " + todo.todoText;
                }
                else {
                    todoTextWithCompletion = "( ) " + todo.todoText;
                }
                // add the text to the <li></li> element. (<li>textContent</li>)
                todoLi.textContent = todoTextWithCompletion;
                // append it to the ul element
                todosUl.appendChild(todoLi);
            }
        }
    }
};


// for (var i = 0; i < todoList.todos.length; i++){
    
//     todoLi.value = todos[i];
//     todoUl.appendChild(todoLi);
//     console.log(todoLi);
    
// }

// todoList.displayTodos();
// todoList.addTodo("item 1")
// todoList.addTodo("item 2")
// todoList.toggleCompleted(0);
// // todoList.toggleCompleted(1);
// todoList.toggleAll();
// todoList.toggleAll();
// todoList.changeTodo(0, "changed first item")
// todoList deleteTodo(1);
// todoList.toggleCompleted(0);

function runWithDebugger(func){
    debugger;
    func();
}

