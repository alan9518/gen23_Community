import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";

import TrashButton from "@mui/icons-material/Delete";
import Button from '@mui/material/Button';

const TodoItem = ({todoText, deleteTodoCallback, onTodoToDeleteBulkClickCallback}) => {
  

  const onTodoItemClick = (event) => {
    // event.stopPropagation();
    console.log("🚀 ~ file: TodosList.js:15 ~ TodoItem ~ todoText:", todoText)
    deleteTodoCallback(todoText)
  }

  const onCheckBoxClick = () => {
    onTodoToDeleteBulkClickCallback(todoText)
  }

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="eliminar">
            <TrashButton  onClick = {onTodoItemClick}/>
          </IconButton>
        }
      >
        <ListItemButton 
          // onClick={() => onTodoToDeleteBulkClickCallback(todoText)}
          onClick={onCheckBoxClick}
          >
          <ListItemIcon>
            <Checkbox
              edge="start"
              // checked={checked.indexOf(value) !== -1}
              // tabIndex={-1}
              disableRipple
              // inputProps={{ 'aria-labelledby': labelId }}
            />
        </ListItemIcon>
        </ListItemButton>
        <ListItemText id={todoText} primary={todoText} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export const TodosList = ({ todosList, deleteTodoCallback, onTodoToDeleteBulkClickCallback }) => {
console.log("🚀 ~ file: TodosList.js:42 ~ TodosList ~ todosList:", todosList)

  return (
    <>
       <Button 
          variant='contained' 
          type="submit"> 
            Eliminar Todos  Seleccionados
        </Button>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {todosList && todosList?.map((todo) => {
            return <TodoItem 
                todoText = {todo.todo} 
                key={todo.todo}
                deleteTodoCallback = {deleteTodoCallback}
                onTodoToDeleteBulkClickCallback = {onTodoToDeleteBulkClickCallback}
            />
          })}
        </List>
    </>
  );
};
