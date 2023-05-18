import { createContext, useContext } from "react";
import { Product } from "../types/product";

export type AppContextData = {
  products: Product[];
};

const AppContext = createContext<AppContextData>({} as AppContextData);
export const AppProvider = AppContext.Provider;

export function useApp(): AppContextData {
  const context = useContext(AppContext);
  return context;
}

export default AppContext;
