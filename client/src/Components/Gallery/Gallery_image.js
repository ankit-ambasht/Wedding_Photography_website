import React from 'react'
import "./Gallery.css"

const Gallery_image = () => {
    const images = [
        "https://plus.unsplash.com/premium_photo-1664530452596-e1c17e342876?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1664530452596-e1c17e342876?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1664530452596-e1c17e342876?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1664530452596-e1c17e342876?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1664530452596-e1c17e342876?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1664530452596-e1c17e342876?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1664530452596-e1c17e342876?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1690148812608-9942834931a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661456395657-049a92e01522?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpZGV8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1549488497-94b52bddac5d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpZGV8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1599142296733-1c1f2073e6de?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJpZGV8ZW58MHx8MHx8fDA%3D",
      ];
  return (
    <div>
       <section className="gallery-section">
        <div className="gallery-header">
          <h2>Wedding Photography Showcase</h2>
          <p>
          Our wedding photography style is modern, contemporary and off-beat. A short selection of some of our favourites is given below. To see more of our work, check out the full showcase or see our real Indian wedding photography stories! 
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img src={src} alt={`Wedding Moment ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Gallery_image
