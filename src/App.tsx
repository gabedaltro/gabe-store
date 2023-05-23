import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import api from "./services/api";
import { Product } from "./types/product";
import { AppProvider } from "./hooks/app";
import { ThemeProvider } from "@mui/material";
import { theme } from "./config/theme";
import { useWindowSize } from "./hooks/windowSize";

const App: React.FC = () => {
  const windowSize = useWindowSize();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      api
        .get("/products")
        .then((response) => {
          setProducts(response.data.products);
        })
        .catch((err) => console.error(err));
    }, 1500);

    setTimeout(() => {
      api
        .get("/products/categories")
        .then((response) => {
          setCategories(response.data);
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, 1500);
  }, []);

  return (
    <BrowserRouter>
      <AppProvider
        value={{ products, loading, categories, isMobile: windowSize.isMobile }}
      >
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
