import { useEffect, useState, useCallback } from "react";
import { AppContext } from "./AppContextValue.js";
import { assertObject } from "../utils/objectHelpers.js";
const API_URL = "http://localhost:3001/cards";

export function AppProvider({ children }) {
  const [lends, setLends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const fetchData = useCallback(() => {
    setLoading(true);
    setError("");
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Could not load lent items");
        return response.json();
      })
      .then(setLends)
      .catch((problem) => setError(problem.message))
      .finally(() => setLoading(false));
  }, []);

  // useEffect runs once to GET data from the API.
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  async function addLend(newLend) {
    assertObject(newLend);
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLend),
    });
    if (!response.ok) throw new Error("Could not add the lent item");
    const savedLend = await response.json();
    assertObject(savedLend);
    setLends((currentLends) => [...currentLends, savedLend]);
  }

  async function updateLend(id, updatedLend) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedLend),
    });
    if (!response.ok) {
      throw new Error("Could not update the lent item");
    }
    const savedLend = await response.json();
    setLends((currentLends) =>
      currentLends.map((lend) => (lend.id === id ? savedLend : lend))
    );

    return savedLend;
  }
  async function deleteLend(id) {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Could not delete the lent item");
    setLends((currentLends) => currentLends.filter((lend) => lend.id !== id));
  }

  return (
    <AppContext.Provider
      value={{
        lends,
        loading,
        error,
        search,
        setSearch,
        addLend,
        updateLend,
        deleteLend,
        refetch: fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
