import { Link } from 'react-router-dom';
import './searchItem.css';

const SearchItem = ({ img, title, rating, price }) => {
  return (
    <div className="searchItem">
      <img src={img} alt="" className="siImg" />
      <div className="siDesc">
        <Link to="/hotels/123">
          <h1 className="siTitle">{title}</h1>
        </Link>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to="/hotels/123">
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
