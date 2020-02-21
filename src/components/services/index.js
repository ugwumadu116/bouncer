import React from "react";
import InViewMonitor from "react-inview-monitor";

import Container from "./styles";
import refund from "./assets/refund.png";
import shipping from "./assets/shipping.png";
import support from "./assets/support.png";
import Text from "../text/index";

const Services = props => {
  return (
    <InViewMonitor
      classNameNotInView="vis-hidden"
      classNameInView="animated slideInLeft"
    >
      <Container>
        <div className="d-flex">
          {props.offers.map((offer, i) => (
            <div key={i} className="d-flex-space-between flex-column p-3">
              <div>
                <img src={offer.icon} alt="support" />
              </div>
              <div>
                <Text medium bold>
                  {offer.service}
                </Text>
              </div>
              <div>
                <Text xSmall ht5 className="text-align">
                  {offer.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </InViewMonitor>
  );
};

export default Services;

Services.defaultProps = {
  offers: [
    {
      icon: shipping,
      service: "FREE SHIPPING",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book`
    },
    {
      icon: refund,
      service: "100% REFUND",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book`
    },
    {
      icon: support,
      service: "SUPPORT 24/7",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book`
    }
  ]
};
