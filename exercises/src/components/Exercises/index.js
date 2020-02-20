import React from 'react';

import {
    Grid
} from "@material-ui/core";

import LeftPane from './LeftPane';
import RightPane from './RightPane';

const style = {
    Paper: {
        padding: 20, marginTop: 10, marginBottom: 10,
    },
};

export default function Exercises() {
    return (
        <Grid container sm={12}>
            <Grid item sm>
                <LeftPane style={style} />
            </Grid>
            <Grid item sm>
                <RightPane style={style} />
            </Grid>
        </Grid>
    );
}
