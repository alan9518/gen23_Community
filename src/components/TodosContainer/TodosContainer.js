import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { TodoForm } from "../TodoForm";
import { TodosList } from '../TodosList';

export const TodosContainer = () => {

    const [todosList, setTodosList] = useState([]);

    const guardarElNuevoTodoEnLaListaDeTodos = (newTodo) => {
        console.log("🚀 ~ file: TodosContainer.js:10 ~ guardarElNuevoTodoEnLaListaDeTodosDelParent ~ newTodo:", newTodo)
        // Agregar el nuevo todo creado en el componente TodoForm a la lista de todos
        // podemos acceder a este nuevo TOdo creado mediante el parametro newTodo de esta funcion
        const newTodosList = [...todosList, newTodo];
        setTodosList(newTodosList);
    }

    
    const deleteTodoItemFromList = (todoToDelete) => {
        console.log("🚀 ~ file: TodosContainer.js:20 ~ deleteTodoItemFromList ~ todoToDelete:", todoToDelete)
        
        const filteredTodos = todosList.filter((todo) => {
            return todo.todo !== todoToDelete
        })
        console.log("🚀 ~ file: TodosContainer.js:24 ~ filteredTodos ~ filteredTodos:", filteredTodos)
        console.log("🚀 ~ file: TodosContainer.js:24 ~ filteredTodos ~ todosList:", todosList)
        
        
        setTodosList(filteredTodos)
    }


    return (
        <Grid container>
            {/* columna para el TODoForm */}
            {/* col-md-4 */}
            <Grid item md={4}>
                <TodoForm 
                    onFormSubmitCallback ={guardarElNuevoTodoEnLaListaDeTodos}

                />
            </Grid>

            {/* columna para la lista de TODOS */}
            {/* col-md-8 */}
            <Grid item md = {8}>
                <h2> Lista Todos </h2>
               <TodosList 
                    todosList={todosList} 
                    deleteTodoCallback = {deleteTodoItemFromList}
                />
            </Grid>
        </Grid>
    )
}