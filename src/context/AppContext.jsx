import { useEffect, useState } from "react";
import { AppContext } from "./AppContextValue.js";
import { assertObject, readObjValue } from "../utils/objectHelpers.js";
const API_URL = "http://localhost:3001/cards";

export function AppProvider({ children }) {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect runs once to GET data from the API.
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Could not load loans");
        return response.json();
      })
      .then(setLoans)
      .catch((problem) => setError(problem.message))
      .finally(() => setLoading(false));
  }, []);

  async function addLoan(newLoan) {
    assertObject(newLoan);
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLoan),
    });
    if (!response.ok) throw new Error("Could not add the loan");
    const savedLoan = await response.json();
    assertObject(savedLoan);
    readObjValue(savedLoan, "id");
    setLoans((currentLoans) => [...currentLoans, savedLoan]);
  }

  async function deleteLoan(id) {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Could not delete the loan");
    setLoans((currentLoans) => currentLoans.filter((loan) => loan.id !== id));
  }

  return (
    <AppContext.Provider value={{ loans, loading, error, addLoan, deleteLoan }}>
      {children}
    </AppContext.Provider>
  );
}
