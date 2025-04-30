import { useState, useEffect } from "react";

export const useInfluencerSelection = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // Load any existing selection from sessionStorage on component mount
  useEffect(() => {
    const storedSelection = sessionStorage.getItem("influencerSelection");
    if (storedSelection) {
      try {
        setSelectedIds(JSON.parse(storedSelection));
      } catch (error) {
        console.error("Failed to parse stored selection", error);
        sessionStorage.removeItem("influencerSelection");
      }
    }
  }, []);

  // Persist selection to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("influencerSelection", JSON.stringify(selectedIds));
  }, [selectedIds]);

  const toggleSelection = (id: number) => {
    setSelectedIds((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((prevId) => prevId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  const clearSelection = () => {
    setSelectedIds([]);
  };

  const isSelected = (id: number) => selectedIds.includes(id);

  return {
    selectedIds,
    toggleSelection,
    clearSelection,
    isSelected,
  };
};
