// Todo List Manager
const todos = [
    { id: 1, task: 'Learn JavaScript', completed: false },
    { id: 2, task: 'Build a project', completed: false },
    { id: 3, task: 'Write documentation', completed: true }
];

// Function to add a new todo
function addTodo(task) {
    const newTodo = {
        id: todos.length + 1,
        task: task,
        completed: false
    };
    todos.push(newTodo);
    return newTodo;
}

// Function to toggle todo status
function toggleTodo(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        return true;
    }
    return false;
}

// Get all incomplete todos
const getIncompleteTodos = () => todos.filter(todo => !todo.completed);

// Example usage
console.log('All todos:', todos);
addTodo('Learn React');
toggleTodo(1);
console.log('Incomplete todos:', getIncompleteTodos());