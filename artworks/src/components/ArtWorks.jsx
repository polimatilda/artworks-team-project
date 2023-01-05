import React from 'react'
import ArtWork from './ArtWork';
import SearchBar from "./SearchBar";
import NavBar from './NavBar';

function ArtWorks({ images, filterImg, setFilterImg, favorites, setFavorites }) {
  return (
    <div className="image-list">
      <div className="App">
        <div className="container">
          <div className="header"><h1>search for your favourite pictures</h1></div>
          <NavBar></ NavBar>
          <SearchBar setFilterImg={setFilterImg} />
            {images.filter((image) => image.title.toLowerCase().includes(filterImg.toLowerCase())).map((image, i) => <ArtWork key={i} image={image} favorites={favorites} setFavorites={setFavorites} />
            )}
        </div>
      </div>
    </div>
  )

}

export default ArtWorks