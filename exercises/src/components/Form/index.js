import React, { useState } from 'react';


import {
  TextField,
} from "@material-ui/core";


import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';



import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 500,
    width: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Form({
  formID,
  musclesCategories,
  onFormSubmit,
  closeEvent
}) {
  const classes = useStyles();
  const [exercise, setExercise] = useState({ title: "", description: "", muscles: "" });

  async function handleChange(name, value) {
    setExercise({ ...exercise, [name]: value })
  }

  async function handleSubmit(event) {
    // TODO: Validate
    event.preventDefault();
    onFormSubmit({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, "-"),
    });
    setExercise({ title: "", description: "", muscles: "" });
    closeEvent(false);
  }

  return (
    <form id={formID} onSubmit={handleSubmit}>
      <TextField
        id="title"
        label="title"
        className={classes.formControl}
        value={exercise.title}
        onChange={event => handleChange("title", event.target.value)}
        autoFocus
        margin="normal"
      />
      <br />
      <FormControl className={classes.formControl}>
        <InputLabel id="muscles">Muscles</InputLabel>
        <Select
          labelId="muscles-label"
          id="muscles-select"
          value={exercise.muscles}
          onChange={event => handleChange("muscles", event.target.value)}
        >
          {musclesCategories.map(category =>
            <MenuItem key={category} value={category}>{category}</MenuItem>
          )}
        </Select>
      </FormControl>
      <br />
      <TextField
        id="description"
        label="description"
        className={classes.formControl}
        value={exercise.description}
        onChange={event => handleChange("description", event.target.value)}
        autoFocus
        margin="normal"
        multiline
        rows="4"
      />
    </form>
  );
}
