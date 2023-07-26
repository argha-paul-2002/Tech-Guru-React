import React from 'react';
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
        <main>
            <h1>Tech-<span className='name-color'>Guru</span></h1>
            <p>Solution to all your problems</p>
        </main>
        </div>
        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>
                We are your one and only solution to the tech problems you face
                every day. We are leading tech company whose aim is to increase the
                problem solving ability in children.
                </p>
            </div>
        </div>

        <div className="home3" id='about'>
          <div>
            <h1>Who we are?</h1>
            <p>
            Tech-Guru is a platform created by tech enthusiasts, for tech enthusiasts. Our team of passionate tech experts curates and creates content that covers a wide range of topics, from the latest tech trends and product reviews to in-depth tech guides and tutorials. We understand the thrill of exploring new technologies, and we're dedicated to sharing that excitement with you.
            </p>
          </div>
        </div>

        <div className="home4" id='brands'>
          <div>
            <h1>Brands</h1>
            <article>
              <div style={
                {
                  animationDelay: "0.3s"
                }
              }>
                <AiFillGoogleCircle />
                <p>Google</p>
              </div>

              <div style={
                {
                  animationDelay: "0.5s"
                }
              }>
                <AiFillAmazonCircle />
                <p>Amazon</p>
              </div>

              <div style={
                {
                  animationDelay: "0.7s"
                }
              }>
                <AiFillYoutube />
                <p>Youtube</p>
              </div>

              <div style={
                {
                  animationDelay: "1s"
                }
              }>
                <AiFillInstagram />
                <p>Instagram</p>
              </div>
            </article>
          </div>
        </div>
    </>
  )
}

export default Home
