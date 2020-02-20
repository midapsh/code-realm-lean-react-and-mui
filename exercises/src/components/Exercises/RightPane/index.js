import React from 'react';

import { Paper, Typography } from "@material-ui/core";

export default function RightPane({ style }) {
    return (
        <Paper style={style.Paper}>
            <Typography
                variant="h3"
            >
                Welcome!
            </Typography>
            <Typography
                variant="subtitle1"
                style={{ marginTop: 20 }}
            >
                Welcome!
            </Typography>
        </Paper>
    );
}
