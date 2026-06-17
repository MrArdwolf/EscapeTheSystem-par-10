import itemsData from '../../data/items.json'
import Item from '../Item/Item'
import useInventory from '../../hooks/useInventory'

import { useEffect } from 'react'

interface InventoryProps {
  room: any;
  setInventory: (inventory: any[]) => void;
}

export default function inventory({ room, setInventory }: InventoryProps) {
  const { items, addItem, addFirstItem } = useInventory()

  useEffect(() => {
    addFirstItem(itemsData[0])
  }, [])

  useEffect(() => {
    setInventory(items);
  }, [items]);

  const handleUseItem = (itemId: number) => {
    if (!room.itemToAdd || items.some(item => item.id === room.itemToAdd)) return;
    
    if (itemId === room.itemToSolve) {
      addItem(itemsData.find(item => item.id === room.itemToAdd));
    }
  };

  return (
    <div className="inventory">
      {items.map((item: any, index: number) => (
        <Item key={index} item={item} handleUseItem={handleUseItem} />
      ))}
    </div>
  )
}