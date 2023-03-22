import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { endpoints } from "../services/endpoints";

import { AppSkeleton } from "components/shared/Skeleton/Skeleton";
import { TodoForm } from "components/TodoForm";
import { TodosList } from "components/TodosList";

export const TodosContainer = () => {
  // Definir variables de estado
  const [todosList, setTodosList] = useState([]);
  const [selectedTodosToBulkDelete, setSelectedTodosToBulkDelete] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTodoLoading, setNewTodoLoading] = useState(false);
  const [requestError, setRequestError] = useState("");

  // Definir operaciones con useEffect
  useEffect(() => {
    // Traer los todos del api cuando se carga el componente

    const fetchTodos = async () => {
      const todosResponseFromAPI = await axios.get(endpoints.getTodos);
      const listaDeTodos = todosResponseFromAPI.data.todos;
      setTodosList(listaDeTodos);
      setIsLoading(false);
      console.log(
        "🚀 ~ file: TodosContainer.js:22 ~ fetchTodos ~ listaDeTodos:",
        listaDeTodos
      );
    };

    fetchTodos();
  }, []);

  const guardarElNuevoTodoEnLaListaDeTodos = async (newTodo) => {
    // Agregar el nuevo todo creado en el componente TodoForm a la lista de todos
    // podemos acceder a este nuevo TOdo creado mediante el parametro newTodo de esta funcion
    // const newTodosList = [newTodo, ...todosList];
    // setTodosList(newTodosList);
    try {
      setNewTodoLoading(true);
      setRequestError("");

      const addTodoResponse = await axios.post(endpoints.postNewTodo, {
        todo: newTodo.todo,
        completed: false,
        userId: 5,
        creationDate: newTodo.creationDate,
      });

      if (addTodoResponse.status !== 200) {
        // manejar errores
        setRequestError(addTodoResponse.data);
      }

      // peticion exitosa
      const newTodoFromApi = addTodoResponse.data;
      const newTodosList = [newTodoFromApi, ...todosList];
      setTodosList(newTodosList);
    } catch (error) {
      setRequestError(error?.response?.data?.message || "Error in Petition");
    } finally {
      setNewTodoLoading(false);
    }
  };

  const deleteTodoItemFromList = (todoToDelete) => {
    console.log(
      "🚀 ~ file: TodosContainer.js:20 ~ deleteTodoItemFromList ~ todoToDelete:",
      todoToDelete
    );

    const filteredTodos = todosList.filter((todo) => {
      return todo.todo !== todoToDelete;
    });
    console.log(
      "🚀 ~ file: TodosContainer.js:24 ~ filteredTodos ~ filteredTodos:",
      filteredTodos
    );
    console.log(
      "🚀 ~ file: TodosContainer.js:24 ~ filteredTodos ~ todosList:",
      todosList
    );

    setTodosList(filteredTodos);
  };

 //   
  const onTodoToDeleteBulkClickCallback = (todoToDelete) => {
    let todosToDelete = [];
    // primer paso, checar si el todo a eliminar ya se encuentra en el array
    
    const isTodoInTheArrayAlready = selectedTodosToBulkDelete.includes(todoToDelete);
    // segundo, si ya se encuentra en el array, porque estamos deseleccionado del checkbox
    if(isTodoInTheArrayAlready) {
        todosToDelete = selectedTodosToBulkDelete.filter((todo) => {
            // "text todo"
            return todo !== todoToDelete;
        })
    }
    else {
        todosToDelete = [...selectedTodosToBulkDelete, todoToDelete];
    
    }

    setSelectedTodosToBulkDelete(todosToDelete)
    
    
  }




  return (
    <Grid container>
      {/* columna para el TODoForm */}
      {/* col-md-4 */}
      <Grid item md={4}>
        <TodoForm onFormSubmitCallback={guardarElNuevoTodoEnLaListaDeTodos} />
      </Grid>

      {/* columna para la lista de TODOS */}
      {/* col-md-8 */}
      <Grid item md={8}>
        <h2> Todos </h2>
        {isLoading ? (
          <AppSkeleton />
        ) : (
          <>
            {newTodoLoading && <span>Loading Todo... </span>}
            {requestError !== "" && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {requestError}
              </Alert>
            )}
            {selectedTodosToBulkDelete.length > 0 && <span>Todos a eliminar : {selectedTodosToBulkDelete.length}  </span>}
            <TodosList
              todosList={todosList}
              deleteTodoCallback={deleteTodoItemFromList}
              onTodoToDeleteBulkClickCallback = {onTodoToDeleteBulkClickCallback}
            />
          </>
        )}
      </Grid>
    </Grid>
  );
};
