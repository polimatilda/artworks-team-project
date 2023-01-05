import React from 'react'
import "./ArtWork.css"
import { Link } from 'react-router-dom';

function ArtWork({ image, favorites, setFavorites }) {

  //const [isFavourite, setIsFavourite] = useState(false);

  return (

    <div className="cards" onClick={() => {
    }}>
      <div className="wrapper">
        <Link to={`/art/${image.id}`}>
          <h2>{image.title}</h2>
        </Link>
        <div>
          <Link to={`/art/${image.id}`}>
            <img src={image.primaryimageurl} alt="kep" />
          </Link>
          <img src={favorites.includes(image.id) ? "https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" : "https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png"} alt="csillag"
            className="favourite" onClick={() => {
              //setIsFavourite((oldValue) => !oldValue)

              if (favorites.includes(image.id)) {
                const favIndex = favorites.indexOf(image.id)
                //console.log(favIndex)
                if (favIndex > -1) {
                  setFavorites(favorites.filter(fav => fav !== image.id))
                }
              } else {
                setFavorites([...favorites, image.id])
              }
            }} />
        </div>
      </div>
    </div>
  )
}

export default ArtWork