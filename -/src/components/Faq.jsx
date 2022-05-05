import React from 'react';
import { useState } from 'react';
import $ from 'jquery';

// let toggle = false;

const Faq = () => {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if(selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
    <section className="faq">
        <div className="container">
        <img src={require('../assets/accordion-monkey.png')} className="accordion_monkey" data-aos="zoom-in-right" data-aos-duration="2000" alt="monkey" />
            <div className="row">
                <div className="col-12 col-lg-6 justify-content-start" style={{ zIndex: 3}}>
                    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="section-header__content">
                        <h2 className='mx-0' style={{textAlign: 'start'}}>F.A.Q <br/>QUESTIONS</h2>
                    </div>
                    <div className="row">
                        {accordionInfo.map((accordion, i) => (
                            <div className="col-12 mb-3">
                                <div className="accordion_item" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                                    <div className="accordion_header">
                                        <button type='button' onClick={() => toggle(i)}>
                                            {accordion.accordionHeader}
                                            <span>{selected == i ? '-' : '+'}</span>
                                        </button>
                                    </div>
                                    <div className={selected == i ? 'accordion_active' : 'accordion_collapse'}>
                                        <div className="accordion-body">
                                            {accordion.accordionBody}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

const accordionInfo = [
    {
        id: 1,
        accordionHeader: '01 When is the official launch?',
        accordionBody: 'We want provide our community with the best quality art from real artist for afordable price That is why we chose mint price of 0.22 ETH (+ gas fee). If you are planning to hold your Bulls you will bee rewarded with FEE Apes Land approximatey 6-8 weeks after the official launch 02 What will the mint price be?.'
    },
    {
        id: 2,
        accordionHeader: '01 When is the official launch?',
        accordionBody: 'We want provide our community with the best quality art from real artist for afordable price That is why we chose mint price of 0.22 ETH (+ gas fee). If you are planning to hold your Bulls you will bee rewarded with FEE Apes Land approximatey 6-8 weeks after the official launch 02 What will the mint price be?.'
    },
    {
        id: 3,
        accordionHeader: '01 When is the official launch?',
        accordionBody: 'We want provide our community with the best quality art from real artist for afordable price That is why we chose mint price of 0.22 ETH (+ gas fee). If you are planning to hold your Bulls you will bee rewarded with FEE Apes Land approximatey 6-8 weeks after the official launch 02 What will the mint price be?.'
    },
    {
        id: 4,
        accordionHeader: '01 When is the official launch?',
        accordionBody: 'We want provide our community with the best quality art from real artist for afordable price That is why we chose mint price of 0.22 ETH (+ gas fee). If you are planning to hold your Bulls you will bee rewarded with FEE Apes Land approximatey 6-8 weeks after the official launch 02 What will the mint price be?.'
    },
    {
        id: 5,
        accordionHeader: '01 When is the official launch?',
        accordionBody: 'We want provide our community with the best quality art from real artist for afordable price That is why we chose mint price of 0.22 ETH (+ gas fee). If you are planning to hold your Bulls you will bee rewarded with FEE Apes Land approximatey 6-8 weeks after the official launch 02 What will the mint price be?.'
    },
    {
        id: 6,
        accordionHeader: '01 When is the official launch?',
        accordionBody: 'We want provide our community with the best quality art from real artist for afordable price That is why we chose mint price of 0.22 ETH (+ gas fee). If you are planning to hold your Bulls you will bee rewarded with FEE Apes Land approximatey 6-8 weeks after the official launch 02 What will the mint price be?.'
    }
]

export default Faq