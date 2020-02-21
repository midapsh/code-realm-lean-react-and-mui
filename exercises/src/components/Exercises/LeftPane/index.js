import React, { Fragment } from 'react';

import {
    Paper, Typography,
    List, ListItem, ListItemText, ListItemSecondaryAction, IconButton
} from "@material-ui/core";

import {Delete, Edit} from '@material-ui/icons';

export default function LeftPane({ style,
    category,
    exercisesByMuscles,
    onSelect,
    onDelete,
    onSelectEdit
}) {
    return (
        <Paper style={style.Paper}>
            {exercisesByMuscles.map(([group, exercises]) =>
                !category || category === group
                    ?
                    <Fragment key={group}>
                        <Typography
                            variant="subtitle1"
                            style={{ textTransform: "capitalize" }}
                        >
                            {group}
                        </Typography>
                        <List component="ul">
                            {exercises.map(({ id, title }) =>
                                <ListItem
                                    key={id}
                                    onClick={() => onSelect(id)}
                                    button
                                >
                                    {/*
                                        PS.: If you put onClick={() => onSelect(id)}
                                        on ListItemText, the client must click on
                                        the Text to change the data.
                                    */}
                                    <ListItemText primary={title} />
                                    <ListItemSecondaryAction>
                                        <IconButton onClick={() => onSelectEdit(id)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton onClick={() => onDelete(id)}>
                                            <Delete />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )}
                        </List>

                    </Fragment>
                    : null
            )}
        </Paper>
    );
}
