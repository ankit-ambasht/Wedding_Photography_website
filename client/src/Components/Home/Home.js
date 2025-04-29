import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Testimonial from "../Testimonial/Testimonial";
import Gallery_image from "../Gallery/Gallery_image";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <section className="home-section">
          <div className="youtube-wrapper">
            <iframe
              className="video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5aUgkXSyTS8?autoplay=1&showinfo=0&rel=0&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=5aUgkXSyTS8"
              title="YouTube video"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>

            <div className="overlay-text"></div>
          </div>
        </section>
      </div>
      <div className="second-home-section container-fluid">
        <div className="second-container">
          <h1>Indian Wedding Photography & Films for the Modern Couple</h1>
          <hr />
          <p>
            At Nichay Srivastav Photography, we specialize in capturing timeless
            wedding moments with heart and artistry. From grand celebrations to
            intimate vows, we tell your story through elegant, candid visuals
            that last a lifetime.
          </p>
          <h6>- Nishchay Srivastava -</h6>
        </div>
      </div>
      <div className="home-gallery"> <Gallery_image /></div>
      
      <div className="third-home-section container-fluid">
        <h5>What We Love ?</h5>
      </div>
      <div className="forth-home-section container-fluid">
        <p>
          "We're passionate storytellers and qualified photographers — hopeless
          romantics at heart. Traveling across the world to capture the most
          important day of your life isn't just our job, it's what we love.
          Every wedding we shoot is a story we deeply care about — and we’re
          honored to tell it through our lens."
        </p>
      </div>

      <div className="fifth-home-section container-fluid">
        <h5> Do You Believe ?</h5>
      </div>

      <div className="sixth-home-section container-fluid">
        <p>
          "We believe every marriage is a timeless promise — a true ‘happily
          ever after.’ Our passion is to capture that magic and turn your dreams
          into cinematic memories that live on forever."
        </p>
      </div>

      <div className="seventh-home-section container-fluid">
        <h5>What We Do ?</h5>
      </div>
      <div className="eight-home-section container-fluid">
        <div className="eight-container">
        <h4>We love destination weddings!</h4>
        <p>
          You’re getting married. You’re looking for an Indian Wedding
          Photographer in Delhi to shoot your dream wedding in your dream
          destination. You and your partner have a beautiful story, and you need
          someone to tell it? That’s where we come in. We are a Wedding
          Photography studio based in New Delhi, and over the last 10 years have
          shot hundreds of Indian Weddings all over the world including Goa,
          Udaipur, Udaipur, Bangkok, Dubai, Abu Dhabi and beyond. Our wedding
          stories are told using wedding photographs and moving images to create
          something that’s fun, modern and timeless. Read more about us and what
          we do in the link below!
        </p>
        </div>
      </div>
          <div className="home-test"> <Testimonial /></div>
      <Footer />
    </>
  );
};

export default Home;
