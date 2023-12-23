import { useEffect, useMemo, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Fallback from "./components/Fallback/Fallback";
import { SearchContext } from "./context/searchContext";
import { useAuth } from "./hooks/useAuth";
import AppRouter from "./router/AppRouter";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const { auth } = useAuth();

  useEffect(() => {
    const unsubscribe = auth();

    return () => {
      unsubscribe?.();
    };
  }, []);

  const contextValue = useMemo(
    () => ({
      searchValue,
      setSearchValue,
    }),
    [searchValue, setSearchValue]
  );

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <SearchContext.Provider value={contextValue}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </SearchContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
