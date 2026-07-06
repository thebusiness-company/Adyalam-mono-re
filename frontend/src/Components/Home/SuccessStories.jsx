import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const SuccessStories = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);

        
    return (
      <section
        className="audience-section fix section-padding bg-cover"
        data-background="/assets/img/hero/herobackground.png"
      >
        <div className="container">
          <div className="audience-wrapper">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-5">
                <div className="audience-content">
                  <div className="section-title">
                    <div className="sub-title bg-color-3 wow fadeInUp">
                      <span className="wow fadeInUp">What We Do</span>
                    </div>
                    <h2
                      className="text-white wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      We help businesses:
                    </h2>
                    <ul className="text-white mt-10 service-list">
                      <li>
                        <h4 className="text-white">
                          Stand out in competitive markets
                        </h4>
                      </li>
                      <li className="mt-2">
                        <h4 className="text-white">
                          Attract the right audience
                        </h4>
                      </li>
                      <li className="mt-2">
                        <h4 className="text-white">Generate qualified leads</h4>
                      </li>
                      <li className="mt-2">
                        <h4 className="text-white">
                          Build long-term brand value
                        </h4>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="client-items wow fadeInUp"
                    data-wow-delay=".5s"
                  ></div>
                </div>
              </div>

              <div className="col-md-6 col-lg-5">
                <div className="audience-right">
                  <div
                    className="audience-img wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="/assets/img/home/wehelpbusiness.webp"
                      alt="Business success journey showing steps from strategy to leadership"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SuccessStories;