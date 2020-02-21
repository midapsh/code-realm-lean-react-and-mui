import React, { useState } from "react";

import {
  Button,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import Form from "../../Form";

export default function Create({
  musclesCategories,
  onCreate,
}) {
  const formID = "dashboard-create-form";
  const [open, setOpen] = useState(false);

  async function handleClickOpen() {
    setOpen(true);
  }

  async function handleClose() {
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
          <Form formID={formID}
            musclesCategories={musclesCategories}
            onFormSubmit={onCreate}
            closeEvent={setOpen}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary"
            variant="contained"
            type="submit"
            form={formID}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
