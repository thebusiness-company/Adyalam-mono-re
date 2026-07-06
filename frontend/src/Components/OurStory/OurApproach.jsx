
const OurApproach = () => {
  const chooseContent = [
    {
      iconclass: "bi bi-search",
      title: "Define",
      content: "We understand your business, market, and audience.",
    },
    {
      iconclass: "bi bi-layers",
      title: "Build",
      content: "We create a clear, compelling digital presence.",
    },
    {
      iconclass: "bi bi-bar-chart-line",
      title: "Grow",
      content:
        "We execute strategies that drive visibility, leads, and revenue.",
    },
  ];

  return (
    <section className="value-section fix section-padding section-bg pt-0">
      <div className="value-shape">
        <img src="/assets/img/value-shape.png" alt="img" />
      </div>
      <div className="value-shape-2">
        <img src="/assets/img/value-shape-2.png" alt="img" />
      </div>
      <div className="container">
        <div
          className="section-title text-center wow fadeInUp"
          data-wow-delay=".3s"
        >
          <h2>Our Approach</h2>
        </div>
        <div className="row justify-content-center">
          {chooseContent.map((item, i) => (
            <div
              key={i}
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="value-box-items">
                <div className="icon">
                  <i className={item.iconclass}></i>
                </div>
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;