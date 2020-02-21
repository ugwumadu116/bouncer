import React from "react";
import InViewMonitor from "react-inview-monitor";

import iphonePic from "./assets/pic.png";
import Text from "../../components/text";
import {
  HeroOneContainerDIV,
  HeroOneDIV,
  HeroOneTextDIV,
  ImageDIV
} from "./style";

const Banner = ({ ...props }) => {
  return (
    <InViewMonitor
      classNameNotInView="vis-hidden"
      classNameInView="animated smoothShow"
    >
      <HeroOneDIV {...props}>
        <HeroOneContainerDIV>
          <HeroOneTextDIV>
            <div>
              <Text xxlarge ht4 transparentColor>
                iPhone 6 Plus
              </Text>
            </div>
            <div>
              <Text small ht6 transparentColor>
                Performance and design. Taken right to the edge.
              </Text>
            </div>
            <div>
              <Text xSmall bold ht6 transparentColor>
                <span className="border-1">SHOP NOW</span>
              </Text>
            </div>
          </HeroOneTextDIV>
          <ImageDIV>
            <img src={iphonePic} alt="Iphone" />
          </ImageDIV>
        </HeroOneContainerDIV>
      </HeroOneDIV>
    </InViewMonitor>
  );
};

export default Banner;
