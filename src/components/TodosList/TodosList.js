import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";

import TrashButton from "@mui/icons-material/Delete";
import CommentIcon from "@mui/icons-material/Comment";

const TodoItem = ({todoText, deleteTodoCallback}) => {
  

  const onTodoItemClick = () => {
    console.log("🚀 ~ file: TodosList.js:15 ~ TodoItem ~ todoText:", todoText)
    deleteTodoCallback(todoText)
  }

  return (
    <>
      <ListItem
        key={todoText}
        secondaryAction={
          <IconButton edge="end" aria-label="eliminar">
            <TrashButton  onClick = {onTodoItemClick}/>
          </IconButton>
        }
        
        // onClick={() => onListItemClick(todo.todo)}
      >
        <ListItemText id={todoText} primary={todoText} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export const TodosList = ({ todosList, deleteTodoCallback }) => {

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {todosList.map((todo) => {
        return <TodoItem 
            todoText = {todo.todo} 
            deleteTodoCallback = {deleteTodoCallback}
        />
      })}
    </List>
  );
};
