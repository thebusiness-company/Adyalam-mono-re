import React from 'react';
import { useState } from "react";
import "./WebsitePricingBreakDown.css";
import { useNavigate } from 'react-router-dom';

const WebsitePricingBreakdown = ({ service, plans }) => {
  const [selectedPlan, setSelectedPlan] = useState(Object.keys(plans)[0]);
  const navigate = useNavigate();

  const activePlan = plans[selectedPlan];

  const handleContactClick = () => {
    const params = new URLSearchParams({
      service,
      plan: selectedPlan,
    });

    navigate(`/contact?${params.toString()}#contact-form`);
  };

  return (
    <div className="website-pricing-breakdown-bg mt-40">
      <div className="website-plan-tabs">
        {Object.keys(plans).map((plan) => (
            <button
              key={plan}
              onClick={() => setSelectedPlan(plan)}
              className={`website-plan-tab-btn ${plan} ${selectedPlan === plan ? "active" : ""}`}
            >
              {plans[plan].name}
            </button>
          )
        )}
      </div>

      <div key={selectedPlan} className="website-selected-plan">
        <div className="website-package-heading">
          <div>
            <h3
              style={{
                backgroundImage: activePlan.gradient,
              }}
              className="website-package-title"
            >
              {activePlan.name} Package
            </h3>

            <h2 className="website-pricing-header mt-2">
              {activePlan.price}
              <sub>+ Taxes</sub>
            </h2>
          </div>

          <button className="website-package-cta" onClick={handleContactClick}>
            Get Started <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        <div className="website-package-grid">
          {/* <div className="website-package-item"> */}
          <div className="website-package-item">
            <h3>Suitable For</h3>
            <ul className="website-suitablefor-titlelist mt-3">
              {activePlan.suitableFor.map((suits, index) => (
                <li key={index} className="website-suitablefor-title">
                  {" "}
                  <span className="website-suitablefor-icon-box">
                    <i className={`bi bi-${suits.icon}`}></i>
                  </span>
                  <span>{suits.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="website-package-item">
            <h3>Included</h3>
            <ul className="website-include-itemlist mt-3">
              {activePlan.includes.map((includes, index) => (
                <li key={index} className="website-include-item">
                  <span className="include-icon">
                    <i className="bi bi-check-lg"></i>
                  </span>
                  {includes}
                </li>
              ))}
            </ul>
          </div>
          <div className="website-package-item">
            <h3>Not Included in This Package</h3>
            <ul className="website-notinclude-itemlist mt-3">
              {activePlan.notIncluded.map((notIncluded, index) => (
                <li key={index} className="website-notinclude-item">
                  <span className="notinclude-icon">
                    <i className="bi bi-x"></i>
                  </span>
                  {notIncluded}
                </li>
              ))}
            </ul>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default WebsitePricingBreakdown;
