import { useEffect, useState, useCallback } from "react";
import { AppContext } from "./AppContextValue.js";
import { assertObject } from "../utils/objectHelpers.js";

const CARDS = "http://localhost:3001/cards";
const CATEGORIES = "http://localhost:3001/categories";

export function AppProvider({ children }) {
  const [lends, setLends] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const [lendsResponse, categoriesResponse] = await Promise.all([
        fetch(CARDS),
        fetch(CATEGORIES),
      ]);

      if (!lendsResponse.ok) {
        throw new Error("Could not load lent items");
      }

      if (!categoriesResponse.ok) {
        throw new Error("Could not load categories");
      }

      const lendsData = await lendsResponse.json();
      const categoriesData = await categoriesResponse.json();

      setLends(lendsData);
      setCategories(categoriesData);
    } catch (problem) {
      setError(problem.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  async function addLend(newLend) {
    assertObject(newLend);

    const response = await fetch(CARDS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLend),
    });

    if (!response.ok) {
      throw new Error("Could not add the lent item");
    }

    const savedLend = await response.json();

    assertObject(savedLend);

    setLends((currentLends) => [...currentLends, savedLend]);

    return savedLend;
  }

  async function updateLend(id, updatedLend) {
    const response = await fetch(`${CARDS}/${id}`, {
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
    const response = await fetch(`${CARDS}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Could not delete the lent item");
    }

    setLends((currentLends) => currentLends.filter((lend) => lend.id !== id));
  }

  return (
    <AppContext.Provider
      value={{
        lends,
        categories,
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
