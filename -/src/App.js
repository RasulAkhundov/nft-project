import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Collection from './components/Collection';
import Mint from './components/Mint';
import RoadMap from './components/RoadMap';
import Team from './components/Team';
import Faq from './components/Faq';
import Community from './components/Community';
import Footer from './components/Footer';
import $ from 'jquery';

function App() {
  const [loading, setLoading] = useState(false);

  const pageLoaded = () => {
    setLoading(true);
    $("body").css("overflow-y", 'visible');
  }

  window.addEventListener('load', pageLoaded);

  return (
    <div className='app-container'>
      <div className={loading ? 'preloader loader_deactive' : 'preloader'}>
        <img src={require('../src/assets/preloader.png')} alt='preloader'/>
      </div>
      <Header/>
      <Home/>
      <Collection/>
      <Mint/>
      <RoadMap/>
      <Team/>
      <Faq/>
      <Community/>
      <Footer/>
    </div>
  );
}

export default App;
