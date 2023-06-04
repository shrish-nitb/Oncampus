import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Add from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";

export default function RegisterDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        startIcon={<Add />}
        size="large"
        fullWidth
      >
        Make your own club
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
   
        <DialogContent style={{ margin: "0px 30px" }}>
            <br />
          <TextField
            id="filled-basic"
            label="Name"
            variant="outlined"
            fullWidth
            size="small"
          />
          <br />
          <br />
          <TextField
            id="filled-basic"
            label="Category"
            variant="outlined"
            fullWidth
            size="small"
          />
          <br />
          <br />
          <TextField
            id="filled-basic"
            label="Description"
            variant="outlined"
            fullWidth
            size="large"
            placeholder="Enter club description with tags"
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{ margin: "0px 50px 20px 50px" }}
            size="large"
            variant="contained"
            autoFocus
            fullWidth
          >
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
