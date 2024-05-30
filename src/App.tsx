import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./components/AppLayout";
import Workflows from "./pages/Workflows";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <Workflows />
      </AppLayout>
    </QueryClientProvider>
  );
}

export default App;
