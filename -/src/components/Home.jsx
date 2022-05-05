import React from 'react';
import discord from '../assets/social/discord.png';
import twitter from '../assets/social/twitter.png';
import instagram from '../assets/social/instagram.png'
import twitch from '../assets/social/twitch.png';
import youtube from '../assets/social/youtube.png';


function Home() {
  return (
    <section className='banner'>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="banner-content" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
              <h1>CRYPTO<br/>BORED APES</h1>
              <span>6666 Unique Undercover Creatures, Starting Minting The 12th of December</span>
              <div className="social">
                <ul>
                  <a><li><img src={discord} alt="discord"/></li></a>
                  <a><li><img src={twitter} alt="discord"/></li></a>
                  <a><li><img src={instagram} alt="discord"/></li></a>
                  <a><li><img src={twitch} alt="discord"/></li></a>
                  <a><li><img src={youtube} alt="discord"/></li></a>
                </ul>
              </div>
              <button type='button'>View On opensea</button>
            </div>
          </div>
        </div>
        <ul className='banner-monkeys'>
          <div className="banner-monkeys-1 d-flex align-items-end" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear">
            <li>
              <img src={require('../assets/monkeys/02.png')} alt="monkey" className='img-fluid'/>
            </li>
            <li>
              <img src={require('../assets/monkeys/01.png')} alt="monkey" className='img-fluid'/>
            </li>
          </div>
          <div className="banner-monkeys-2 d-flex align-items-end" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear">
            <li>
              <img src={require('../assets/monkeys/03.png')} alt="monkey" className='img-fluid'/>
            </li>
            <li>
              <img src={require('../assets/monkeys/04.png')} alt="monkey" className='img-fluid'/>
            </li>
          </div>
        </ul>
      </div>
    </section>
  )
}

export default Home