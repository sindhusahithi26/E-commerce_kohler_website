import './HomePage.css';
import Static from '../../Components/Static/Static';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer.jsx';
import NavBar from '../../Components/NavBar/NavBar';
import Banner from '../../Components/Banner/Banner.jsx';
import BestSellers from '../../Components/BestSellers/BestSellers.jsx';
import TabComponent from '../../Components/TabComponent/TabComponent.jsx';
import Area from '../../Components/Area/Area.jsx';
import Image32 from '../../assets/image-32.svg';
import Image33 from '../../assets/image-33.svg';
import i_1 from '../../assets/i_1.jpeg';
import i_2 from '../../assets/i_2.jpeg';
import i_3 from '../../assets/i_3.jpeg';
import i_4 from '../../assets/i_4.jpeg';
import i_5 from '../../assets/i_5.jpeg';
import i_6 from '../../assets/i_6.jpeg';
import i_7 from '../../assets/i_7.jpeg';
import i_8 from '../../assets/i_8.jpeg';
import i_9 from '../../assets/i_9.jpeg';
import i_10 from '../../assets/i_10.jpeg';
import i_11 from '../../assets/i_11.jpeg';
import i_12 from '../../assets/i_12.jpeg';
import A_1 from '../../assets/A_1.jpeg';
import A_2 from '../../assets/A_2.jpeg';
import A_3 from '../../assets/A_3.jpeg';
import A_4 from '../../assets/A_4.jpeg';
import A_5 from '../../assets/A_5.jpeg';
import A_6 from '../../assets/A_6.jpeg';
import A_7 from '../../assets/A_7.jpeg';
import A_8 from '../../assets/A_8.jpeg';
import A_9 from '../../assets/A_9.jpeg';
import A_10 from '../../assets/A_10.jpeg';
import A_11 from '../../assets/A_11.jpeg';
import A_12 from '../../assets/A_12.jpeg';
import f_1 from '../../assets/f_1.jpeg';
import f_2 from '../../assets/f_2.jpeg';
import f_3 from '../../assets/f_3.jpeg';
import f_4 from '../../assets/f_4.jpeg';
import f_5 from '../../assets/f_5.jpeg';


const bestSellersItems = [
  { image: i_1, name: 'Malleco Kitchen Faucet' },
  { image: i_2, name: 'Maxstow Mirror Cabinet' },
  { image: i_3, name: 'Rainduet Filter Shower' },
  { image: i_4, name: 'ModernLife Edge Wash Basin' },
  { image: i_5, name: 'Portable Jet Spray Bidet' },
  { image: i_6, name: 'Reach Bathtub' },
  { image: i_7, name: 'Essential Capsule Mirror' },
  { image: i_8, name: 'Cuff Health Faucet' },
  { image: i_9, name: 'Atom Kitchen Faucet' },
  { image: i_10, name: 'Rain Max Rain Shower' },
  { image: i_11, name: 'Emile Kitchen Faucet' },
  { image: i_12, name: 'Essential Round Mirror' },
  // Add more items as needed
];

const InstagramItems = [
  { image: f_1, name: 'Malleco Kitchen Faucet' },
  { image: f_2, name: 'Maxstow Mirror Cabinet' },
  { image: f_3, name: 'Rainduet Filter Shower' },
  { image: f_4, name: 'ModernLife Edge Wash Basin' },
  { image: f_5, name: 'Portable Jet Spray Bidet' },
  { image: Image33, name: 'Reach Bathtub' },
  { image: Image32, name: 'Essential Capsule Mirror' },
  { image: f_1, name: 'Cuff Health Faucet' },
  { image: f_2, name: 'Atom Kitchen Faucet' },
  { image: f_3, name: 'Rain Max Rain Shower' },
  { image: f_4, name: 'Emile Kitchen Faucet' },
  { image: f_5, name: 'Essential Round Mirror' },
  // Add more items as needed
];

const showeringItems = [
  { image: A_1, name: 'Showers' },
  { image: A_2, name: 'Diverter & Trims' },
  { image: A_3, name: 'Digital Showerings' },
  { image: A_4, name: 'Bathtubs' },
];

const toiletItems = [
  { image: A_5, name: 'Toilets'},
  { image: A_6, name: 'Toilet Bidet Seats'},
  { image: A_7, name: 'Smart Toilets'},
  { image: A_8, name: 'Cisterns & Flushings'},
];

const groomingItems = [
  { image: A_9, name: 'Basins' },
  { image: A_10, name: 'Mirrors & Cabinets' },
  { image: A_11, name: 'Faucets' },
  { image: A_12, name: 'Bathroom Vanities'},
];


export default function HomePage() {
  return (
    <div className="main">
      <Header />
      <Banner />
      <NavBar />
      <div className="bgVid">
        <video style={{width: '100vw'}} loop={true} autoPlay={true} id="vid" src="Sveda Steam Wash Basin.mp4" />
        <div className="content">
          <a id="content-head">Explore Sveda</a>
          <p>
            Let your skin bask in the luxury of the
            Sveda Steam Wash Basin by Kohler.
          </p>
          <a href="">Explore Now</a>
          <a href="">Shop Now</a>
        </div>
      </div>
      <BestSellers heading="Best Sellers" items={bestSellersItems} showViewAll={true} />
      <div>
        <Area heading="Showering Area" items={showeringItems} />
        <Area heading="Toilet Area" items={toiletItems} />
        <Area heading="Grooming Area" items={groomingItems} />
      </div>
      <Static />
      <BestSellers heading="Follow us on Instagram" items={InstagramItems} showViewAll={false} />
      <TabComponent />
      <Footer />
    </div>
  );
}
