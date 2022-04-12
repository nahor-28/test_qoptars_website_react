import './App.css';
import { Hero, Video, Gallery, FeatureGroup, GridrouselWrapper, Navbar, Promo, CameraFeatures, Text_1, ProFeatures, Slider, CarouselWrapper, Modes, Safety, CompareSlider } from './components';


function App() {
  return (
      <>
        <Navbar />
        <Hero />
        <FeatureGroup />
        <Promo />
        <CameraFeatures />
        {/* <Gallery /> */}
        <CarouselWrapper />
        <Text_1 />
        <ProFeatures />
        {/* <Slider /> */}
        <Modes />
        <Safety />
        <CompareSlider />
      </>
  );
}

export default App;
