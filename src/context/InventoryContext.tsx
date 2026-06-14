import { createContext, useState, type PropsWithChildren } from "react";

interface IInventoryContext {
  items: any[];
  addItem: (item: any) => void;
  addFirstItem: (item: any) => void;
}

export const InventoryContext = createContext<IInventoryContext | null>(null);


export default function InventoryProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<any[]>([]);

  const addItem = (item: any) => {
    setItems(prev => [...prev, item]);
  };

  const addFirstItem = (item: any) => {
    setItems([item]);
  };

  return (
    <InventoryContext.Provider value={{ items, addItem, addFirstItem }}>
      {children}
    </InventoryContext.Provider>
  )
}