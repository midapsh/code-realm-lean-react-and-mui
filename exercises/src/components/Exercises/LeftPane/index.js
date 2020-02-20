import React from 'react';

import {
    Paper, Typography,
    List, ListItem, ListItemText
} from "@material-ui/core";

export default function LeftPane({ style, exercisesByMuscles }) {
    return (
        <Paper style={style.Paper}>
            {exercisesByMuscles.map(([group, exercises]) =>
                <Typography
                    key={group}
                    variant="subtitle1"
                    style={{ textTransform: "capitalize" }}
                >
                    {group}
                </Typography>
            )}
        </Paper>
    );
}

// {/* <List component="nav" aria-label="secondary mailbox folders">
//         <ListItem button>
//           <ListItemText primary="Trash" />
//         </ListItem>
//         <ListItemLink href="#simple-list">
//           <ListItemText primary="Spam" />
//         </ListItemLink>
//       </List> */}