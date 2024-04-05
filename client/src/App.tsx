import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import { ThemeVariantsProps, theme } from "./theme";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";
import { useMemo, useState, useEffect, useCallback } from "react";
import { AuthContext } from "./AuthContext";

function App() {
  const [mode, setMode] = useState<ThemeVariantsProps>(
    ThemeVariantsProps.light
  );
  const activeTheme = useMemo(() => responsiveFontSizes(theme(mode)), [mode]);
  const handleOnChange = useCallback(
    () =>
      setMode(
        mode === ThemeVariantsProps.light
          ? ThemeVariantsProps.dark
          : ThemeVariantsProps.light
      ),
    [mode]
  );

  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  const login = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);

    setTimeout(() => {
      setToken(null);
      localStorage.removeItem("token");
    }, 3600000);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <div className="app">
      <AuthContext.Provider value={{ token, login, logout }}>
        <ThemeProvider theme={activeTheme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
