import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtWorks from "./components/ArtWorks";
import Art from "./components/Art";
import Favorites from "./components/Favorites";

function App() {
  const [images, setImages] = useState([]);
  const [filterImg, setFilterImg] = useState("");
  const [favorites, setFavorites] = useState([]);

  //ezzel lehetne randomizálni a képeket: &sort=random
  const fetchArtwork = () => {
    fetch(
      "https://api.harvardartmuseums.org/OBJECT?apikey=9bdd8c60-a61a-4512-9ab9-ea2f802f02c3&size=25"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data.records);
      });
  };

  useEffect(() => fetchArtwork(), []);

  useEffect(() => {
    const favsItem = JSON.parse(localStorage.getItem("favorites"))
    if (favsItem) {
      setFavorites(favsItem)
    }
  }, [])

  useEffect(() => {
    //az if miatt ha minden favot kiveszünk nem fog eltűnni az utolsó id
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites))
      // } if (favorites.length === 0) {
      //   localStorage.setItem("favorites", JSON.stringify([]));
    }
  }, [favorites])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ArtWorks
              setFilterImg={setFilterImg}
              filterImg={filterImg}
              images={images}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route
          path="/art/:id"
          element={<Art />}
        />
        <Route path="/favorites" element={<Favorites favorites={favorites} setFilterImg={setFilterImg} filterImg={filterImg} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
