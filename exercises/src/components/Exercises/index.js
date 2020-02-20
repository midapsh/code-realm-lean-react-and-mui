import React from 'react';

import {
    Grid, Paper
} from "@material-ui/core";

export default function Exercises() {
    return (
        <Grid container sm={12}>
            <Grid item sm>
                <Paper style={{ padding: 20, marginTop:10, marginBottom:10 }}>
                    Left Pane
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={{ padding: 20, marginTop:10, marginBottom:10 }}>
                    Right Pane
                </Paper>
            </Grid>
        </Grid>
    );
}
