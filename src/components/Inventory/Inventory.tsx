import itemsData from '../../data/items.json'
import Item from '../Item/Item'
import useInventory from '../../hooks/useInventory'

import { useEffect } from 'react'


export default function inventory() {
  const { items, addItem, addFirstItem } = useInventory()
  const unusedItems = itemsData.filter(item => !items.some(i => i.item === item.item))

  useEffect(() => {
    addFirstItem(itemsData[0])
  }, [])

  const handleAddItem = () => {
    if (unusedItems.length === 0) return
    const itemToAdd = unusedItems[Math.floor(Math.random() * unusedItems.length)]
    unusedItems.splice(unusedItems.indexOf(itemToAdd), 1)
    addItem(itemToAdd)
  }


  return (
    <div className="inventory">
      {items.map((item: any) => (
        <Item key={item.id} item={item.item} src={item.image} description={item.description} />
      ))}
    </div>
  )
}