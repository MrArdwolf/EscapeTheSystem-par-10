import itemsData from '../../data/items.json'
import Item from '../Item/Item'
import useInventory from '../../hooks/useInventory'

import { useEffect } from 'react'

interface InventoryProps {
  room: any;
  setIsSolved: (isSolved: boolean) => void;
  setInventory: (inventory: any[]) => void;
}

export default function inventory({ room, setIsSolved, setInventory }: InventoryProps) {
  const { items, addItem, addFirstItem } = useInventory()
  const unusedItems = itemsData.filter(item => !items.some(i => i.item === item.item))

  useEffect(() => {
    addFirstItem(itemsData[0])
  }, [])

  useEffect(() => {
    setInventory(items);
  }, [items]);

  const handleAddItem = () => {
    if (unusedItems.length === 0) return
    const itemToAdd = unusedItems[Math.floor(Math.random() * unusedItems.length)]
    unusedItems.splice(unusedItems.indexOf(itemToAdd), 1)
    addItem(itemToAdd)
  }

  // const isSolved = items.some(item => item.item === room.itemToAdd);

  // if (isSolved) {
  //   setIsSolved(true);
  // }

  return (
    <div className="inventory">
      <button onClick={handleAddItem}>Add Item</button>
      {items.map((item: any) => (
        <Item key={item.id} item={item.item} src={item.image} description={item.description} />
      ))}
    </div>
  )
}