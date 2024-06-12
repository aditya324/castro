import React, { Component } from "react";

class FeatureIcon extends Component {
  render() {
    let data = [
      {
        featureIcon: "feature-1.png",
        featureTitle: "Top Rated",
        featureDescription:
          "With over 20 years of expertise, we're industry leaders in engineering and project development, earning top ratings from clients worldwide.",
      },
      {
        featureIcon: "feature-2.png",
        featureTitle: "Best Quality",
        featureDescription:
          "We deliver the highest quality engineering services and products, ensuring durability and performance that exceed industry standards.",
      },
      {
        featureIcon: "feature-3.png",
        featureTitle: "Cost Efficient",
        featureDescription:
          "Offering unparalleled value, we provide cost-efficient solutions without compromising quality, helping clients achieve their goals while optimizing budgets.",
      },
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col-lg-4 col-md-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="feature">
            <div className="icon">
              <img
                src={`assets/img/icons/${val.featureIcon}`}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="content">
              <h3>{val.featureTitle}</h3>
              <p className="mt-3">{val.featureDescription}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {/*Feature section start*/}
        <div
          className={`feature-section section-space--inner--100 ${this.props.background}`}
        >
          <div className="container">
            <div className="col-lg-12">
              <div className="feature-item-wrapper">
                <div className="row">{Datalist}</div>
              </div>
            </div>
          </div>
        </div>
        {/*Feature section end*/}
      </div>
    );
  }
}

export default FeatureIcon;
