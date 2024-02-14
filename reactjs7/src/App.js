import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./Navbar";
import { Profile } from "./pages/Profile";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// holds all the data context
export const AppContext = createContext();

// highest level component
function App() {
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // to refetch only with button
      refetchOnWindowFocus: false,
    },
  },
});
const [username, setUsername] = useState("Anonymous");

  return (
     // provide the data to components inside of it,
     // specify the data in provider
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{username, setUsername}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="*" element={<h3> error: not a valid page!</h3>} />
        </Routes>
      </Router>
      </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;