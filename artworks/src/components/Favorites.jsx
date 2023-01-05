import React from 'react';
import NavBar from './NavBar';
import { useState, useEffect } from "react";
import Favorite from './Favorite';
import SearchBar from './SearchBar';

function Favorites({ favorites, filterImg, setFilterImg, }) {

  const [favData, setFavData] = useState([])
  const [newFavs, setNewFavs] = useState([...favorites])

  const fetchFavorites = (id) => {

    fetch(
      `https://api.harvardartmuseums.org/OBJECT/${id}?apikey=9bdd8c60-a61a-4512-9ab9-ea2f802f02c3`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFavData([...favData, data]);
        setNewFavs([...newFavs.slice(1)]);
      });
  };

  useEffect(() => {
    if (newFavs.length > 0) {
      fetchFavorites(newFavs[0])
    }
  }, [newFavs]);

  return (
    <div className="favContainer">
      <NavBar></NavBar>
      <SearchBar setFilterImg={setFilterImg} />
      {favData.length > 0 ? (
        <>
          {favData.filter((fav) => fav.title.toLowerCase().includes(filterImg.toLowerCase())).map((fav, i) => {
            return <Favorite key={i} fav={fav} />
          })
          }
        </>
      ) : (<h1 className='no-faves'>no favorites yet</h1>)
      }
    </div>
  )
}

export default Favorites