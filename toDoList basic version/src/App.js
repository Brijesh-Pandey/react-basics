import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/Inbox";
import { Link } from "react-router-dom";

import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
export default function App() {
  const [textBoxData, setTextBoxData] = useState("");
  const [todoList, setTodoList] = useState([]);
  const classes = useStyles();

  const handleChange = (event) => {
    let currentData = event.target.value;

    setTextBoxData(currentData);
  };

  const handleClick = () => {
    if (textBoxData) {
      let todoListClone = [
        ...todoList,
        { todo: textBoxData, completed: false }
      ];
      setTodoList(todoListClone);
      setTextBoxData("");
    }
  };

  const markTodoComplete = (index) => {
    const todoListClone = [...todoList];
    const todoCompleted = todoListClone[index];
    todoCompleted.completed = true;
    todoListClone.splice(index, 1);
    setTodoList([...todoListClone, todoCompleted]);
  };

  const handleDelete = (index) => {
    // console.log(todoList[index]);
    let filteredData = todoList.filter(
      (item) => item.todo != todoList[index].todo
    );
    //console.log(filteredData);
    setTodoList(filteredData);
  };

  return (
    <>
      {/* box */}
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={handleChange}
        value={textBoxData}
      />
      {/* 3 buttons */}
      <Button variant="contained" color="primary" onClick={handleClick}>
        Add
      </Button>
      {/* Routing Trial */}

      {/* list of items */}
      {/* <div>
        <Link to="/page1">Home</Link>
      </div> */}
      <hr />
      <p>Your todo list is </p>
      <List component="nav" aria-label="secondary mailbox folders">
        {todoList.map((item, index) => (
          <ListItem>
            {item.completed && <InboxIcon />}
            <ListItemText primary={item.todo} />
            <div className={classes.root}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </Button>
              {!item.completed && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    markTodoComplete(index);
                  }}
                >
                  mark complete
                </Button>
              )}
            </div>
          </ListItem>
        ))}
      </List>
    </>
  );
}
