import { useContext } from "react";
import { AppContext } from "./AppContextValue.js";

export function useApp() {
  return useContext(AppContext);
}
