import React from "react";
import { useState } from "react";
import PricingCard from "../Card/PricingCard";
import WebsitePricingBreakdown from "../PricingDetails/WebsitePricingBreakdown";
import { websitePlans }  from "../PricingDetails/WebsitePlans";

const WebsitePricing = ({ CoulmnClass }) => {
  const [showWebsitePlans, setShowWebsitePlans] = useState(false);

  const website = "website";

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="monthly"
              role="tabpanel"
            >
              <div className="row g-4">
                <div
                  className="col-xl-12 col-lg-12 col-md-12 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <PricingCard
                    addclass="pricing-box-items style-2"
                    title="Website Plans"
                    price="₹4,999"
                    subtext="One-time payment + Taxes"
                    plansList={[
                      "Mobile Responsive Website",
                      "SEO Setup",
                      "Professional Website Pages",
                      "Contact Forms & Lead Features",
                      "Google Tools Integration",
                      "Template-Based & Custom Website Design",
                      "Terms & Privacy Pages Included",
                    ]}
                    btnfunction={() => setShowWebsitePlans(true)}
                    btnname="View Plans"
                    path1="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H2.5A1.5 1.5 0 0 0 1 12.5V13h14v-.5a1.5 1.5 0 0 0-1.5-1.5H10v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5"
                    path2="M2 14a1 1 0 0 0-1 1v1h14v-1a1 1 0 0 0-1-1z"
                    path3="M4.5 3.5a.5.5 0 0 1 0 1L2.707 6.25 4.5 8a.5.5 0 1 1-.708.708l-2.146-2.146a.5.5 0 0 1 0-.708l2.146-2.146a.5.5 0 0 1 .708 0m7 0a.5.5 0 0 1 .708 0l2.146 2.146a.5.5 0 0 1 0 .708l-2.146 2.146a.5.5 0 0 1-.708-.708L13.293 6.25 11.5 4.5a.5.5 0 0 1 0-.708"
                  ></PricingCard>
                </div>
              </div>
            </div>
          </div>
          <div className="breakdown-container">
            {showWebsitePlans && (
              <WebsitePricingBreakdown plans={websitePlans} service={website} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsitePricing;
