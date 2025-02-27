import AppRoutes from "./routes/AppRoutes";
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <AppRoutes />
    </StoreProvider>
  );
}

export default App;
