import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container" style={{paddingBlock: '100px'}}>
            <div className="row">
            <div className="col">
                <div className="banner-content" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                <h1>Follow Us!</h1>
                <span>If two Heads Area Better Than One, 6666 Heads Should Be Way Better! Join Our Community.r</span>
                <div className="social">
                    <ul>
                    <a><li><img src={require('../assets/social/discord.png')} alt="discord"/></li></a>
                    <a><li><img src={require('../assets/social/twitter.png')} alt="discord"/></li></a>
                    <a><li><img src={require('../assets/social/instagram.png')} alt="discord"/></li></a>
                    <a><li><img src={require('../assets/social/twitch.png')} alt="discord"/></li></a>
                    <a><li><img src={require('../assets/social/youtube.png')} alt="discord"/></li></a>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="footer_copyright" style={{
            borderTop: '2px solid rgba(255, 255, 255, 0.05)'
        }}>
            <div className="container">
                <div className="text_center" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '24px 0'
                    }}>
                    <p style={{
                        fontSize: '18px',
                        color: '#ecffe1'
                    }}>
                        © 2022 | All Rights Reserved
                        <a href="https://rasulakhundov.herokuapp.com" target="_blank" style={{
                            fontSize: '16px',
                            color: '#abff87',
                            textDecoration: 'none',
                            marginLeft: '5px'
                        }}>Rasul Akhundov</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer