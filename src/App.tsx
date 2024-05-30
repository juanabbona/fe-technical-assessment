import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./components/AppLayout";
import Workflows from "./pages/Workflows";
import Data from "./pages/Data";
import Monitoring from "./pages/Monitoring";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

function App() {
  const { pathname } = window.location;

  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        {pathname === "/" ? (
          <Workflows />
        ) : pathname === "/data" ? (
          <Data />
        ) : pathname === "/settings" ? (
          <Settings />
        ) : pathname === "/monitoring" ? (
          <Monitoring />
        ) : (
          "Not Found"
        )}
      </AppLayout>
    </QueryClientProvider>
  );
}

export default App;
