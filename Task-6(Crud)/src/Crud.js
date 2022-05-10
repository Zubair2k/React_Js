import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Card_Display from "./Card_Display";
import { deepPurple } from "@mui/material/colors";

let i = 0;
const detail = [];
export default function Crud() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [feedback, setFeedback] = useState("");
  const [open, setOpen] = useState(false);
  const [displaydetails, setdisplaydetails] = useState([]);
  const [formvalues, setFormvalues] = useState({
    id: i,
    name: name,
    email: email,
    gender: gender,
    feedback: feedback
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const changeEdit = (id) => {
    const changeEditvalue = displaydetails.filter((data) => data.id == id);
    console.log(changeEditvalue);
    setName(changeEditvalue.name);
    setEmail(changeEditvalue.email);
    setGender(changeEditvalue.gender);
    setFeedback(changeEditvalue.feedback);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    i++;
    detail.push({ formvalues });
    setdisplaydetails(detail);
    setName(" ");
    setEmail(" ");
    setGender(" ");
    setFeedback("");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: deepPurple[500] }}>
        <Typography
          variant="h5"
          red
          component="div"
          sx={{ flexGrow: 1, padding: 5 }}
        >
          FEEDBACK FORM
        </Typography>
      </AppBar>
      <br />
      <br />

      <form onSubmit={handleSubmit} id="myform">
        <FormControl sx={{ marginTop: 5 }}>
          <TextField
            required
            id="name"
            label="Name"
            value={name}
            variant="outlined"
            onChange={(e) => {
              setName(e.target.value);
              setFormvalues({
                id: i,
                name: name,
                email: email,
                gender: gender,
                feedback: feedback
              });
            }}
          />

          <TextField
            required
            type="email"
            value={email}
            id="email"
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
              setFormvalues({
                id: i,
                name: name,
                email: email,
                gender: gender,
                feedback: feedback
              });
            }}
            sx={{ marginTop: 3 }}
          />
          <FormHelperText id="component-helper-text">
            We'll never share your email to anyone
          </FormHelperText>

          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ marginTop: 3 }}
          >
            Gender
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            onChange={(e) => {
              setGender(e.target.value);
              setFormvalues({
                id: i,
                name: name,
                email: email,
                gender: gender,
                feedback: feedback
              });
            }}
            name="radio-buttons-group"
            value={gender}
          >
            <FormControlLabel
              value="Male"
              control={<Radio required />}
              label="Male"
            />
            <FormControlLabel
              value="Female"
              control={<Radio required />}
              label="Female"
            />
            <FormControlLabel
              value="Other"
              control={<Radio required />}
              label="Other"
            />
          </RadioGroup>

          <TextField
            required
            id="outlined-multiline-static"
            value={feedback}
            label="Feedback"
            multiline
            rows={4}
            onChange={(e) => {
              setFeedback(e.target.value);
              setFormvalues({
                id: i,
                name: name,
                email: email,
                gender: gender,
                feedback: feedback
              });
            }}
            sx={{ marginTop: 3 }}
          />
        </FormControl>

        <br />
        <Button
          id="submit"
          variant="outlined"
          onClick={handleClickOpen}
          sx={{
            marginTop: 3,
            color: "white",
            backgroundColor: deepPurple[500]
          }}
        >
          Submit
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"FEEDBACK CONFIRMATION"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete the feedback form?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button type="submit" onClick={handleClose} form="myform" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </form>
      <br />
      <Divider />
      <br />
      <div className="feedBack">
        {displaydetails.map((detail) => (
          <Card_Display detail={detail} changeEdit={changeEdit} />
        ))}
      </div>
    </Box>
  );
}
