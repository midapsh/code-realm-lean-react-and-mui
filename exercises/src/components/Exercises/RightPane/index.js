import React from 'react';

import { Paper, Typography } from "@material-ui/core";

export default function RightPane({
    style,
    exercise: {
        title = "Welcome!",
        description = "Please select your stuff"
    },
    editMode
}) {
    return (
        <Paper style={style.Paper}>
            {editMode
                ? <> {/* <Form /> */} </>
                : <>
                    <Typography
                        variant="h3"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        style={{ marginTop: 20 }}
                    >
                        {description}
                    </Typography>
                </>
            }
        </Paper>
    );
}
