import "./App.css";
import { AuthProvider } from "./auth";
import { AppRouter } from "./routes/AppRouter";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
};

export default App;
