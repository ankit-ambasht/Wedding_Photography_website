import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'



const videos = [
    {
      id: 1,
      title: "Nature Walk",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
    {
      id: 2,
      title: "City Lights",
      url: "https://www.youtube.com/embed/sBws8MSXN7A",
    },
    {
      id: 3,
      title: "Wildlife Documentary",
      url: "https://www.youtube.com/embed/CWWohR-ycKw?si=nmCPrhXPn3w_KbZt",
    },
    // Add more videos here
  ];
const Film = () => {

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 py-10 px-4 mt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Video Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{video.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>


      <Footer />
    </div>
  )
}

export default Film
