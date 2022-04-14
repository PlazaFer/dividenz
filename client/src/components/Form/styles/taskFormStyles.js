import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Container, Paper, Button, TextField } from "@mui/material";

export const ContainerForm = styled(Container)(() => ({
  height: "70vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const PaperForm = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    width: "500px",
}));

export const ButtonBack = styled(Button)(() => ({
    margin: "20px 0px 0px 20px"
}));

export const ButtonForm = styled(Button)(() => ({
    margin: "20px 0px 0px 0px"
}));

export const Inputs = styled(TextField)(() => ({
    marginTop: '20px'
}));


export const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
}));
