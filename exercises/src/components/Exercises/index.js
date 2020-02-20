import React from 'react';

import {
    Grid
} from "@material-ui/core";

import LeftPane from './LeftPane';
import RightPane from './RightPane';

const style = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: "auto",
    },
};

export default function Exercises({ exercisesByMuscles }) {
    return (
        <Grid container>
            <Grid item sm>
                <LeftPane style={style} exercisesByMuscles={exercisesByMuscles} />
            </Grid>
            <Grid item sm>
                <RightPane style={style} />
            </Grid>
        </Grid>
    );
}
