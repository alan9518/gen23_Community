import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const TodoForm = ({onFormSubmitCallback}) => {
    

    const [todoText, setTodoText] = useState('');
   

    const onTodoTextInputChange = (event) => {
        const inputValue = event.target.value;
        setTodoText(inputValue);
    }

    const onTodoFormSubmit = (event) => {
        event.preventDefault();
        // se crea nuevo objeto TODO
        const newTodoLocal = {
            todo: todoText,
            creationDate: new Date(),
            completed: false
        }
        
        // esta funcion viene su parent como prop
        // la funcionDummy manda ese nuevo objeto TODO al TodosContainer 
        // funcionDummy(newTodoLocal);
        onFormSubmitCallback(newTodoLocal)
        // guardarElNuevoTodoEnLaListaDeTodosDelParent('funcion ejecutada')
    }


    return (
        <>
        <Box // <form  onSubmit = {onTodoFormSubmit}>
            component="form"
            sx = {{
                display:'flex',
                alignItems: 'center',
                padding: '2em'
            }}
            onSubmit = {onTodoFormSubmit}
        >
            
            <TextField
                variant='outlined'
                label='Agrega el nuevo TODO'
                required
                onChange={onTodoTextInputChange}
            />

            

            <Button 
                variant='contained' 
                type="submit"> 
                Crear  
            </Button>


            <br/>
         
        </Box>
        </>
    )
}   



// Forma de exportar el componente usando default
// export default TodoForm;