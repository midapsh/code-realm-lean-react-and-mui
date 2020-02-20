import React, { Fragment } from 'react';

import {
    Paper, Typography,
    List, ListItem, ListItemText
} from "@material-ui/core";

export default function LeftPane({ style, exercisesByMuscles }) {
    return (
        <Paper style={style.Paper}>
            {exercisesByMuscles.map(([group, exercises]) =>
                <Fragment key={group}>
                    <Typography
                        variant="subtitle1"
                        style={{ textTransform: "capitalize" }}
                    >
                        {group}
                    </Typography>
                    <List component="ul">
                        {exercises.map(({ title }) =>
                            <ListItem
                                key={title}
                                button
                            >
                                <ListItemText primary={title} />
                            </ListItem>
                        )}
                    </List>

                </Fragment>
            )}
        </Paper>
    );
}
