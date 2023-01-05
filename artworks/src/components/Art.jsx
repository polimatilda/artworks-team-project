import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import "./Art.css"
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';


function Art() {

  let { id } = useParams();

  const [details, setDetails] = useState(null)

  const fetchDetails = () => {
    fetch(
      `https://api.harvardartmuseums.org/OBJECT/${id}?apikey=9bdd8c60-a61a-4512-9ab9-ea2f802f02c3`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  };

  console.log(details);

  useEffect(() => fetchDetails(), []);

  return (
    <div className='details-container'>
      <NavBar>Art</NavBar>
      {details && <>
        <div className='card-artwork'>
          <h1>{details.title}</h1>
          <img src={details.primaryimageurl} alt="kep" />
          <div className='details'>
            <p><b>Accession year:</b> {details.accessionyear}</p>
            <p><b>Division:</b> {details.division}</p>
            <p><b>Creditline:</b> {details.creditline}</p>
            <p><b>Classification:</b> {details.classification}</p>
            <p><b>Contact:</b> {details.contact}</p>
            <p><b>Dimensions:</b> {details.dimensions}</p>
          </div>
        </div>
      </>}
    </div>


  )
}

export default Art