import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import api from "./services/api";
import { Product } from "./types/product";
import { AppProvider } from "./hooks/app";
import InsideLoading from "./components/loading/InsideLoading";
import { ThemeProvider } from "@mui/material";
import { theme } from "./config/theme";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      api
        .get("/products")
        .then((response) => {
          setProducts(response.data.products);
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, 1500);
  }, []);

  return (
    <BrowserRouter>
      <AppProvider value={{ products }}>
        <ThemeProvider theme={theme}>
          {loading ? <InsideLoading /> : <AppRoutes />}
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
