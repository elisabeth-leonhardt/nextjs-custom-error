import React, { useEffect, useState } from 'react';
import Link from 'next/link'


function Locations(rops) {
const [locations, setLocations] = useState({});
useEffect( () => {
    fetch("https://rickandmortyapi.com/api/location")
    .then(res => res.json())
    .then(data => setLocations(data));
}, [])
    return (
        <div className="locations-container">
        <Link href="/"><a>Back to home</a></Link>
        <h2>Rick and Morty Locations</h2>
        <Link href="/characters"><a>Show me Rick and Morty Characters!</a></Link>
        {
            
            locations.results?.map((location) => (
                <article key={location.id}>
                    <p>Name: {location.name}</p>
                    <p>Dimension: {location.dimension}</p>
                    <p>Type: {location.type}</p>

                </article>))
        }            
        </div>
    );
}

export default Locations;