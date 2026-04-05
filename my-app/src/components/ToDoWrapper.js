import React, {useState} from 'react'
import { ToDoForm } from './ToDoForm'
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from './ToDo';
import { EditTodoForm } from './EditToDoForm';
uuidv4();

/*
Array map()
props:
    A prop is a way to pass data from a parent component (ToDoWrapper) to a child component (ToDo). In this case, we are passing the task property of each todo item as a prop to the ToDo component, allowing it to display the task in the UI.
  item:
    The item in the array is represented by the variable todo, which is an object containing the properties id, task, completed, and isEditing. We are specifically passing the task property to the ToDo component as a prop.
  Do you have to initialize arrays like in java? 
    No, in JavaScript, you can initialize an array using the useState hook without needing to specify a type or size. For example, you can simply use const [todos, setTodos] = useState([]); to initialize an empty array for storing todo items.
  key prop:
    The key prop is set to the index of the item in the array, which helps React identify which items have changed, are added, or are removed. The array is the todos state variable, which is an array of todo objects. Each todo object has properties such as id, task, completed, and isEditing. The map() method is used to iterate over this array and render a ToDo component for each todo item, passing the task property as a prop to the ToDo component.
  Where is index defined, so we can use it as a key prop?
    The index is defined as the second parameter in the callback function of the map() method. When you use map(), it takes a callback function that receives two arguments: the current item (in this case, todo) and its index in the array. So, when we write todos.map((todo, index) => ...), the index variable is automatically assigned the value of the current index of the item being processed in the array.
  So the second paramter of the map is always the index of the item in the array?
    Yes, in JavaScript's array map() method, the second parameter of the callback function is always the index of the current item being processed in the array. The first parameter is the current item itself, and the second parameter is its index. This allows you to access both the item and its position in the array when performing operations within the map() function.
  task prop:
    The task prop is passed to the ToDo component, which can be used to display the task in the UI.
  What is the role of const?
    The const keyword is used to declare a constant variable in JavaScript. Once a constant is assigned a value, it cannot be reassigned. This is useful for defining values that should remain unchanged throughout the execution of the program.
  Is a constant basically a function?
    No, a constant is not a function. It is a variable that holds a value that cannot be reassigned. A function, on the other hand, is a block of code designed to perform a particular task and can be called multiple times with different arguments. Constants are used to store values that should not change, while functions are used to perform actions or calculations.

*/

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodos = todo => {
    setTodos([...todos, {id:uuidv4(), task: todo, completed: false, isEditing: false}]);
    console.log(todos);
  };
  const toggleComplete = id => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  const editToDo = id => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo));
  }
  const editTask = (task, id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo));
  }
  return (
    <div>
        <ToDoForm addTodo={addTodos} />
          {
            todos.map((todo, index) => (todo.isEditing ? (<EditTodoForm editTodo={editTask} task={todo}/>) : 
            (<ToDo key={index} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editToDo={editToDo} />)
        ))}
    </div>
  )
}

