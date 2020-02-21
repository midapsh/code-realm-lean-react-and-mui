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

export default function Exercises({
        // Left pane    
        category,
        exercisesByMuscles,
        onSelect,
        onDelete,
        onSelectEdit,
        // Right pane
        exercise,
        editMode
    }) {
    return (
        <Grid container>
            <Grid item sm>
                <LeftPane
                    style={style}
                    category={category}
                    exercisesByMuscles={exercisesByMuscles}
                    onSelect={onSelect}
                    onDelete={onDelete}
                    onSelectEdit={onSelectEdit}
                />
            </Grid>
            <Grid item sm>
                <RightPane
                    style={style}
                    exercise={exercise}
                    editMode={editMode}
                />
            </Grid>
        </Grid>
    );
}
