import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to my amazing Rick and Morty Page!</h2>
      <div className="img-container">
        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"></img>
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"></img>
      </div>
      <div className="link-container">
        <Link href="/characters">
          <a>
            Show me Rick and Morty Characters!
          </a>
        </Link>
        <Link href="/locations">
          <a>
            Show me Rick and Morty locations!
          </a>
        </Link>
      </div>
    </div>
  )
}
