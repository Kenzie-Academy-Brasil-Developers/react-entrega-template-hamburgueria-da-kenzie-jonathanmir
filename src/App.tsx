import { AuthProvider } from "./contexts/AuthContext";
import { CartContextProvider } from "./contexts/CartContext";
import { RoutesMain } from "./routes";

export function App() {
  return (
    <>
      <AuthProvider>
        <CartContextProvider>
          <RoutesMain />
        </CartContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
