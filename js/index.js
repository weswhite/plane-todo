/**
 * Created by weswhite on 5/1/16.
 */
var data = [
    {task: "Write an todo app with pure javascript", status: "incomplete"},
    {task: "Give Avery a high five", status: "incomplete"},
    {task: "Fly to San Fransisco", status: "incomplete"},
    {task: "Eat a Yummy Dinner",status: "incomplete"}
];

(function(){printTodos();}());

function printTodos(){
    for(var i = 0; i < data.length; i++){
        var todoDiv = document.createElement('div');
        todoDiv.innerHTML = data[i].task;
        todoDiv.addEventListener('click', function(){
            if(this.className == "completed") {
                this.className = "incomplete";
            } else {
                this.className = "completed";
            }
        });
        todoDiv.className = "incomplete";
        document.getElementById('todo').appendChild(todoDiv);
    }
}

function printNewTodo(todo){
    var todoDiv = document.createElement('div');
    todoDiv.innerHTML = todo;
    todoDiv.addEventListener('click', function(){
        if(todoDiv.className == "completed") {
            todoDiv.className = "incomplete";
        } else {
            todoDiv.className = "completed";
        }
    });
    todoDiv.className = "incomplete";
    document.getElementById('todo').appendChild(todoDiv);
}

function storeTodo(todo){
    data.push(todo);
}

function cleanUp(){
    document.getElementById('taskInput').value = "";
}

function addTodo(){
    var newTask = document.getElementById('taskInput').value;
    var newTodo = {task: newTask};
    storeTodo(newTodo);
    cleanUp();
    printNewTodo(newTask);
}