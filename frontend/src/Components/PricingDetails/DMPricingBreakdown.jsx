import React from 'react';
import { useState } from "react";
import "./DMPricingBreakdown.css";
import { useNavigate } from 'react-router-dom';

const DMPricingBreakdown = ({ service, plans }) => {
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
    <div className="dm-pricing-breakdown-bg mt-40">
      <div className="dm-plan-tabs">
        {Object.keys(plans).map((plan) => (
          <button
            key={plan}
            onClick={() => setSelectedPlan(plan)}
            className={`dm-plan-tab-btn ${plan} ${selectedPlan === plan ? "active" : ""}`}
          >
            {plans[plan].name}
          </button>
        ))}
      </div>

      <div key={selectedPlan} className="dm-selected-plan">
        <div className="dm-package-heading">
          <div>
            <h3
              style={{
                backgroundImage: activePlan.gradient,
              }}
              className="dm-package-title"
            >
              {activePlan.name} Package
            </h3>

            <h2 className="dm-pricing-header mt-2">
              {activePlan.price}
              <sub>/ Month</sub>
            </h2>
          </div>

          <button className="dm-package-cta" onClick={handleContactClick}>
            Get Started <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        <ul className="dm-feature-grid mt-4">
          {activePlan.features.map((item, index) => (
            <li key={index} className="dm-feature-item">
              <span className="dm-feature-icon-box">
                <i className={item.icon}></i>
              </span>
              <span className="dm-feature-service">{item.service}</span>:{" "}
              <strong>{item.value}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DMPricingBreakdown;
