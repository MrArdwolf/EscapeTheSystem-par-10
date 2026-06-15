import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

export default function useInventory() {
  const context = useContext(InventoryContext);

  if (!context) {
    throw new Error("useInventory must be used within a Provider");
  }

  return context;
}