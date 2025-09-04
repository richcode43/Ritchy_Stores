import "./App.css";
import AppRouter from "./AppRouter";
import { AuthContextProvider } from "./context/authContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </>
  );
}

export default App;
