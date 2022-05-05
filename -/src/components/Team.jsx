import React from 'react'

const Team = () => {
  return (
    <section className="team">
        <div className="container">
            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="section-header__content">
                <h2>MEET OUR TEAM</h2>
                <p>Some teams call themselves a family, but we actually are one! all designers with a passion for art</p>
            </div>
            <div className="row justify-content-center">
                <div className="col" data-aos="flip-right" data-aos-duration="1000">
                    <div className="single_content">
                        <div className="team_thumb">
                            <img src={require('../assets/team/01.png')} alt="monkey" />
                        </div>
                        <div className="team__content">
                            <h5>Johann Row</h5>
                            <p>UI/UX Designer</p>
                        </div>
                    </div>
                </div>
                <div className="col mt-4 mt-sm-0" data-aos="flip-right" data-aos-duration="1000">
                    <div className="single_content">
                        <div className="team_thumb">
                            <img src={require('../assets/team/02.png')} alt="monkey" />
                        </div>
                        <div className="team__content">
                            <h5>Robinor Uep</h5>
                            <p>NFT Marketer</p>
                        </div>
                    </div>
                </div>
                <div className="col mt-4 mt-lg-0" data-aos="flip-right" data-aos-duration="1000">
                    <div className="single_content">
                        <div className="team_thumb">
                            <img src={require('../assets/team/03.png')} alt="monkey" />
                        </div>
                        <div className="team__content">
                            <h5>jhon Doe</h5>
                            <p>The Developer</p>
                        </div>
                    </div>
                </div>
                <div className="col mt-4 mt-xl-0" data-aos="flip-right" data-aos-duration="1000">
                    <div className="single_content">
                        <div className="team_thumb">
                            <img src={require('../assets/team/04.png')} alt="monkey" />
                        </div>
                        <div className="team__content">
                            <h5>Sammlie tom</h5>
                            <p>3d Artist</p>
                        </div>
                    </div>
                </div>
                <div className="col mt-4 mt-xxl-0" data-aos="flip-right" data-aos-duration="1000">
                    <div className="single_content">
                        <div className="team_thumb">
                            <img src={require('../assets/team/05.png')} alt="monkey" />
                        </div>
                        <div className="team__content">
                            <h5>Emanuel Elp</h5>
                            <p>CTO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team