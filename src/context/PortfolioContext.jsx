import { createContext, useContext } from "react";
import { portfolioData as defaultData } from "../data/portfolioData";

const PortfolioContext = createContext(defaultData);

export function PortfolioProvider({ children, data = defaultData }) {
  return <PortfolioContext.Provider value={data}>{children}</PortfolioContext.Provider>;
}

export function usePortfolio() {
  return useContext(PortfolioContext);
}
