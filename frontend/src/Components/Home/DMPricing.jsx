import React from "react";
import { useState } from "react";
import PricingCard from "../Card/PricingCard";
import DMPricingBreakdown from "../PricingDetails/DMPricingBreakdown";
import { digitalMarketingPlans } from "../PricingDetails/DigitalMarketingPlans";

const DMPricing = ({ CoulmnClass }) => {
  const [showDMPlans, setShowDMPlans] = useState(false);
  const [showWebsitePlans, setShowWebsitePlans] = useState(false);

  const dm = "dm";

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="pricing-content">
              <div className="section-title">
                <div className="sub-title bg-color-2 wow fadeInUp">
                  <span>OUR PRICING PLAN</span>
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Our awesome <br /> Pricing Plan
                </h2>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="monthly"
              role="tabpanel"
            >
              <div className="row g-4">
                <div
                  className="col-xl-12 col-lg-12 col-md-12  wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <PricingCard
                    addclass="pricing-box-items"
                    title="Digital Marketing Plans"
                    price="₹8,999"
                    subtext=" / Month"
                    plansList={[
                      "Content Creation (Posts & Reels)",
                      "Social Media Management",
                      "SEO & Keyword Optimization",
                      "Meta Ads (Reach & Lead Generation)",
                      "Google Ads & Demand Generation",
                      "WhatsApp, Email & YouTube Marketing",
                      "Analytics, Reporting & Strategic Support",
                    ]}
                    btnfunction={() => setShowDMPlans(true)}
                    btnname="View Plans"
                    path1="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49"
                    path2="M1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7"
                    path3="M14 3.85c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993z"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="breakdown-container">
            {showDMPlans && (
              <DMPricingBreakdown plans={digitalMarketingPlans} service={dm} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DMPricing;