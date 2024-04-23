import './index.css'

const DestinationItem = props => {
  const {placesDetails} = props
  const {name, imgUrl} = placesDetails
  return (
    <li className="place-card">
      <img src={imgUrl} alt={name} className="place-img" />
      <p className="place-name">{name}</p>
    </li>
  )
}

export default DestinationItem
