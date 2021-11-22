import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Error from './_error';


function Locations(rops) {
const [locations, setLocations] = useState({});
useEffect( () => {
    // correct locaon to location to fix the app
    fetch("https://rickandmortyapi.com/api/locaon")
    .then(res => res.json())
    .then(data => setLocations(data));
}, [])

if(locations.error) {
    return <Error></Error>
}
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