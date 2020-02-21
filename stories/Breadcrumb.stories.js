import React from "react";
import Styled, { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import Breadcrumb from "../src/components/breadcrumb";
import { withKnobs } from "@storybook/addon-knobs";
import Text from '../src/components/text'
const Link = Styled(Text)`
text-decoration:none;
    padding:0 0.3rem 0 0.3rem;
`;

export const primary = () => (
  <ThemeProvider theme={theme}>
    <Breadcrumb primaryLight>
      <Link secondaryLightColor small as="a" href="#">
        Home
      </Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link secondaryLightColor small as="a" href="#">
        product
      </Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link xSmall>Headphones</Link>
    </Breadcrumb>
    <br />
    <Breadcrumb primary>
      <Link secondaryLightColor small as="a" href="#">
        Home
      </Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link secondaryLightColor small as="a" href="#">
        Product
      </Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link xSmall>Headphones</Link>
    </Breadcrumb>
    <br />
    <Breadcrumb primaryDark>
      <Link secondaryLightColor small as="a" href="#">
        Home
      </Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link secondaryLightColor small as="a" href="#">
        Product
      </Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link xSmall>Headphones</Link>
    </Breadcrumb>
    <br />
    <Breadcrumb primaryDarker>
      <Link secondaryLightColor small as="a" href="#">
        Home
      </Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link secondaryLightColor small as="a" href="#">
        Product
      </Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link secondaryLightColor xSmall>
        Headphones
      </Link>
    </Breadcrumb>
  </ThemeProvider>
);
export const danger = () => (
  <ThemeProvider theme={theme}>
    <Breadcrumb danger>
      <Link secondaryLightColor small as="a" href="#">
        Home
      </Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link secondaryLightColor small as="a" href="#">
        Product
      </Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link xSmall>Headphones</Link>
    </Breadcrumb>
    <br />
    <Breadcrumb dangerDark>
      <Link secondaryLightColor small as="a" href="#">
        Home
      </Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link secondaryLightColor small as="a" href="#">
        Product
      </Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link xSmall>Headphones</Link>
    </Breadcrumb>
    <br />
    <Breadcrumb dangerDarker>
      <Link secondaryLightColor small as="a" href="#">
        Home
      </Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link secondaryLightColor small as="a" href="#">
        Product
      </Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link xSmall>Headphones</Link>
    </Breadcrumb>
  </ThemeProvider>
);
export const secondary = () => (
  <ThemeProvider theme={theme}>
    <Breadcrumb secondary>
      <Link small as="a" href="#">Home</Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link small as="a" href="#">Product</Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link xSmall>Headphones</Link>
    </Breadcrumb>
    <br />
    <Breadcrumb secondaryDark>
      <Link small as="a" href="#">Home</Link>
      <Link medium>/</Link>
      <Link small as="a" href="#">Product</Link> <Link medium>/</Link> <Link xSmall>Headphones</Link>
    </Breadcrumb>
    <br />
    <Breadcrumb secondaryDarker>
      <Link secondaryLightColor small as="a" href="#">
        Home
      </Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link secondaryLightColor small as="a" href="#">
        Product
      </Link>
      <Link secondaryDarkColor medium>
        /
      </Link>
      <Link secondaryLightColor xSmall>
        Headphones
      </Link>
    </Breadcrumb>
  </ThemeProvider>
);
export const warning = () => (
  <ThemeProvider theme={theme}>
    <Breadcrumb warning>
      <Link small as="a" href="#">Home</Link>
      <Link medium>/</Link>
      <Link small as="a" href="#">Product</Link> <Link medium>/</Link> <Link xSmall>Headphones</Link>
    </Breadcrumb>
    <br />
    <Breadcrumb warningDark>
      <Link small as="a" href="#">Home</Link>
      <Link medium>/</Link>
      <Link small as="a" href="#">Product</Link> <Link medium>/</Link> <Link xSmall>Headphones</Link>
    </Breadcrumb>
    <br />
    <Breadcrumb warningDarker>
      <Link small as="a" href="#">Home</Link>
      <Link medium>/</Link>
      <Link small as="a" href="#">Product</Link> <Link medium>/</Link> <Link xSmall>Headphones</Link>
    </Breadcrumb>
  </ThemeProvider>
);
export const success = () => (
  <ThemeProvider theme={theme}>
    <Breadcrumb success>
      <Link small as="a" href="#">Home</Link>
      <Link medium>/</Link>
      <Link small as="a" href="#">Product</Link> <Link medium>/</Link> <Link xSmall>Headphones</Link>
    </Breadcrumb>
    <br />
    <Breadcrumb successDark>
      <Link small as="a" href="#">Home</Link>
      <Link medium>/</Link>
      <Link small as="a" href="#">Product</Link> <Link medium>/</Link> <Link xSmall>Headphones</Link>
    </Breadcrumb>
    <br />
    <Breadcrumb successDarker>
      <Link small as="a" href="#">Home</Link>
      <Link medium>/</Link>
      <Link small as="a" href="#">Product</Link> <Link medium>/</Link> <Link xSmall>Headphones</Link>
    </Breadcrumb>
  </ThemeProvider>
);
export default {
  title: "Breadcrumb",
  decorators: [withKnobs]
};
