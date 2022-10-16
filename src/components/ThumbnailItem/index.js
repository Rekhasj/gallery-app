// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailList, updateActiveImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailList
  const onClickImage = () => {
    updateActiveImage(id)
  }

  return (
    <li className="list-container">
      <button type="button" onClick={onClickImage} className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
