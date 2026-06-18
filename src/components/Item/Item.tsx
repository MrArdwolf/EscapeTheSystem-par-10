import './Item.scss'

interface Props {
  item: { id: number, name: string, description: string, image: string };
  handleUseItem: (itemId: number) => void;
}


export default function item( { item, handleUseItem } : Props ) {
    return (
      <div className="item" onClick={() => handleUseItem(item.id)}>
        <img src={item.image} alt={item.name} />
      </div>
    )
}