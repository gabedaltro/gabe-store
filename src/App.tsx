import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import api from "./services/api";
import { Product } from "./types/product";
import { AppProvider } from "./hooks/app";
import InsideLoading from "./components/loading/InsideLoading";

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
        {loading ? <InsideLoading /> : <AppRoutes />}
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;

