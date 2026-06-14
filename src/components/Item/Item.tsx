

interface Props {
  item: string
  src: string
  description: string
}


export default function item( { item, src, description } : Props ) {
    return (
      <div className="item">
        <img src={src} alt={item} />
      </div>
    )
}