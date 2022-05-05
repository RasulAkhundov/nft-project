import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Collection from './components/Collection';
import Mint from './components/Mint';
import RoadMap from './components/RoadMap';
import Team from './components/Team';
import Faq from './components/Faq';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app-container'>
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
