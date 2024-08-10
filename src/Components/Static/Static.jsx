import "./Static.css";
import S_1 from "../../assets/S_1.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Static() {
  return (
    <div className="static"> 
      <p className="image-card__heading-2"></p>
      <div className="image-card-3">
        <div className="image-card-3__image-1">
          <a href="">
            <LazyLoadImage src={S_1} alt="" />
          </a>
          <p className="image_head-2">Our Exquisite Kitchen Faucets</p>
          <p className="image-desc">Transform your kitchen with our exquisite faucets. Combining elegance and functionality, they bring a touch of luxury to your everyday cooking experience.</p>
          <a href="">Shop Now</a>
        </div>
        <div className="image-card-3__image-2">
          <a href="">
            <LazyLoadImage src={S_1} alt="" />
          </a>
          <p className="image_head-2">Our Luxurious Bathroom Collections</p>
          <p className="image-desc">Experience the ultimate elegance with our luxurious bathroom collections. Elevate your daily routine with exquisite designs and premium features.</p>
          <a href="">Shop Now</a>
        </div>
      </div>

      
      <div className="why-buy">
        <h2 className="why-buy__heading">Why Buy from Kohler Directly</h2>
        <div className="why-buy__sections">
          <div className="why-buy__section">
            <h3 className="why-buy__subheading">Free and fast delivery. Same day dispatch*.</h3>
            <p className="why-buy__paragraph">Enjoy fast, free delivery with same-day dispatch for an enhanced shopping experience.</p>
            <a href="" className="why-buy__terms">See Terms</a>
          </div>
          <div className="why-buy__section">
            <h3 className="why-buy__subheading">Simple returns - Return your order within 7 days*.</h3>
            <p className="why-buy__paragraph">Benefit from our 7 day return policy.</p>
            <a href="" className="why-buy__terms">See Terms</a>
          </div>
          <div className="why-buy__section">
            <h3 className="why-buy__subheading">Professional Installation - Kohler approved installation available*.</h3>
            <p className="why-buy__paragraph">Benefit from professional brand installation services.</p>
            <a href="" className="why-buy__terms">Find Out More</a>
          </div>
          <div className="why-buy__section">
            <h3 className="why-buy__subheading">Assistance from Kohler specialists, Live Chat.</h3>
            <p className="why-buy__paragraph">Live chat with Kohler product specialist and find your right product.</p>
            
          </div>
        </div>
      </div>

      
      <div className="content-2">
        <div className="content-2__content">
          <p className="content-2__heading">Experience Kohler</p>
          <p className="content-2__desc">
            Step into the world of Kohler at our Experience Centres. Explore our exquisite products, plan your projects, and stay updated with the latest in design and innovation.
            <span className="new-line">Experience the pinnacle of luxury firsthand.</span>
          </p>
          <form action="">
            <input
              className="content-2__button"
              type="submit"
              value="Find A Kohler Store"
            />
          </form>
        </div>
        <div className="content-2__image"></div>
      </div>
    </div>
  );
}

export default Static;
