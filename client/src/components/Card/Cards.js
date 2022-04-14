import React from "react";
import { useNavigate } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const Cards = ({ object, handleDelete }) => {
  const navigate = useNavigate();


  return (
    <Paper elevation={3}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
            {object.title}
          </Typography>
          <Typography variant="body1"> {object.content} </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton
            variant="contained"
            color="warning"
            onClick={() => navigate(`/edit/${object.id}`, { state: object })}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            variant="contained"
            color="error"
            onClick={() => handleDelete(object.id)}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Paper>
  );
};
