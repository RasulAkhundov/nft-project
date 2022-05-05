import React from 'react';

const Mint = () => {
  return (
    <section className="mint">
        <img src={require('../assets/mint-monkey.png')} data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className="mint-monkey-img" alt="monkey"/>
        <img src={require('../assets/mint-group-monkey.png')} data-aos="fade-up"data-aos-easing="linear" data-aos-duration="1000" className="group-monkey" alt="group-monkey" />
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
                    <div className="row">
                        <div className="col-6">
                            <h6 className="mint-sub_title">Project Size</h6>
                            <h2 className="mint__numbers">6,666</h2>
                            <h4 className="mint__name">NFT'S</h4>
                        </div>
                        <div className="col-6">
                            <h6 className="mint-sub_title">Mint Price</h6>
                            <h2 className="mint__numbers">3.078</h2>
                            <h4 className="mint__name">POLYGON</h4>
                        </div>
                        <div className="col-6 mt-5">
                            <h6 className="mint-sub_title">Mint Date</h6>
                            <h2 className="mint__numbers">11th*</h2>
                            <h4 className="mint__name">FEBRUARY</h4>
                        </div>
                        <div className="col-6 mt-5 d-flex align-items-center">
                            <button type='button'>Mint Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6"></div>
            </div>
        </div>
    </section>
  )
}

export default Mint