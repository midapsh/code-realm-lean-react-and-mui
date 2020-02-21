import React, { useState } from "react";

import {
  Button,
  Fab,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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

export default function Create({ musclesCategories, onCreate }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [exercise, setExercise] = useState({ title: "", description: "", muscles: "" });


  async function handleClickOpen() {
    setOpen(true);
  }

  async function handleClose() {
    setOpen(false);
  }

  async function handleChange(name, value) {
    setExercise({ ...exercise, [name]: value })
  }

  async function handleSubmit(event) {
    // TODO: Validate
    event.preventDefault();
    onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, "-"),
    });
    setExercise({ title: "", description: "", muscles: "" });
    setOpen(false);
  }
  return (
    <>
      <Fab size="small" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="form-dialog-title">
          Create new Exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below
          </DialogContentText>
          <form onSubmit={handleSubmit}>
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
        </DialogContent>
        <DialogActions>
          <Button color="primary"
            variant="contained"
            type="submit"
            onClick={handleSubmit}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
