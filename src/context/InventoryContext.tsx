import { createContext, useState, type PropsWithChildren } from "react";

interface IInventoryContext {
  items: any;
  setItems: any;
}

export const InventoryContext = createContext<IInventoryContext | null>(null);


export default function InventoryProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState([]);

  return (
    <InventoryContext.Provider value={{ items, setItems }}>
      {children}
    </InventoryContext.Provider>
  )
}