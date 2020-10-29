import React from "react";
import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";

export default (props) => {
  return (
    <List component="nav" aria-label="secondary mailbox folders">
      <ListItem button>
        {props.listItems.map((item) => {
          return <ListItemText primary={item} />;
        })}
      </ListItem>
    </List>
  );
};
