import React from 'react'

export default function Hero(){
  return (
    <main className="hero">
      <div className="hero-inner">
        <h1>An abundance of experiences to enjoy from dawn to dusk</h1>
        <p>Choose from any of our stylish rooms and suites, and enjoy amenities like free high-speed wireless Internet.</p>
        <div className="actions">
          <a className="btn primary" href="/accommodation">Explore Rooms</a>
          <a className="btn" href="/offers">See Offers</a>
        </div>
      </div>
      <div className="hero-image" style={{backgroundImage: 'url(https://www.rainbowruiruresort.com/assets/images/home/1558613241-rrr_jobs.jpg)'}} />
    </main>
  )
}
