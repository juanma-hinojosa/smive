function PricingComponent() {
  const pricingsList = [{ h3: "Basic Plan", span: "250", icon:'fas fa-home' },
  { h3: "Premium Plan", span: "650", icon:'fas fa-building' },
  { h3: "Black Plan", span: "1050", icon:'fas fa-city' }
  ];
  return (
    <div className="pricing-container">
      <section className="pricing" id="pricing">
        <h1 className="heading"> our pricing </h1>

        <div className="box-container">
          {pricingsList.map((princing, index) => (
            <div className="box" key={index}>
              <i className={princing.icon}></i>
              <h3>{princing.h3}</h3>
              <div className="price">
                <span>$</span>{princing.span}<span>/mo</span>
              </div>
              <div className="list">
                <p>interior design</p>
                <p>refurbishment</p>
                <p>material supply</p>
                <p>maintenance</p>
                <p>24/7 support</p>
              </div>
              <a href="#" className="btn">
                choose plan
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PricingComponent;
