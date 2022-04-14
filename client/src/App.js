import { AppRouter } from "./routes/AppRouter";
import { ToastContainer } from "react-toastify";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
