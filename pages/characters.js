import React from 'react';
import Link from 'next/link'

function Characters(props) {
    return (
        <div className="locations-container">
        <Link href="/"><a>Back to home</a></Link>
        <h2>Rick and Morty Characters</h2>
        <Link href="/locations"><a>Show me Rick and Morty Locations!</a></Link>
            {
                props.characters.results.map( (character) => (
                    <article key={character.id} className="character-card">
                        <img src={character.image} alt={character.name} height="200px" />
                        <div>
                            <p>{character.name}</p>
                            <p>{character.location.name}</p>
                        </div>
                    </article>
                ))
            }
        </div>
    );
}

export default Characters;

export async function getServerSideProps(context) {
    // correct charter to character to fix the page
    const characters  = await fetch("https://rickandmortyapi.com/api/charter").then(res => res.json());
    return { props: { characters}}
}