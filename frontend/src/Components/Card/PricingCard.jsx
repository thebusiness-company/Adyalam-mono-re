import { Link } from "react-router-dom";

const PricingCard = ({
  addclass,
  title,
  price,
  subtext,
  plansList,
  btnurl,
  btnname,
  btnfunction,
  path1,
  path2,
  path3,
}) => {
  return (
    <div className={addclass}>
      <div className="pricing-header">
        <div className="pricing-title">
          <h2>{title}</h2>
        </div>

        <div className="pricing-price">
          <h2>
            <sub>Starting at </sub>
            <br />
            {price}
            <br />
          </h2>
            <sub className="text-white"> {subtext}</sub>
        </div>

        <div className="icon pricingcard-icons">
          {/* <img src="/assets/img/cloud.png" alt="img" /> */}
          {/* <i className={icon}></i> */}
          {/* <h2> */}
          <svg
            xmlns="http://w3.org"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-rocket-takeoff me-2 text-success"
            className="pricing-logo"
            viewBox="0 0 16 16"
          >
            <path d={path1} fill="#FFFFFF" />
            <path d={path2} fill="#FFFFFF" />
            <path d={path3} fill="#FFFFFF" />
          </svg>
          {/* </h2> */}
        </div>
      </div>
      <div className="pricing-features">
        <ul className="price-list">
          {plansList?.map((item, index) => (
            <li key={index}>
              <span className="price-1">
                <i className="bi bi-check-lg"></i> {item}
              </span>
              {/* <span className="icon">
                <i className="bi bi-question-circle"></i>
              </span> */}
            </li>
          ))}
        </ul>
        <div className="price-button">
          <button className="theme-btn" onClick={btnfunction}>
            {btnname} <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;