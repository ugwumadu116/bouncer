import React from "react";
import Text from "../src/components/text";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";


export const text = () => (

  <ThemeProvider theme={theme}>
    <Text xxxlarge bold ht2 ltSpacing4 primaryColor >
      Heading 1 - Proxima Nova Semiold 56px
      </Text>
    <Text xxlarge bold ht3 ltSpacing3>
      Heading 2 - Proxima Nova Semiold 48px
      </Text>
    <Text xlarge bold ht3 ltSpacing2> 
      Heading 3 - Proxima Nova Semiold 36px
      </Text>
    <Text large bold ht1 ltSpacing1> 
      Heading 4 - Proxima Nova Semiold 30px
      </Text>
    <Text medium bold ht1>
      Heading 5 - Proxima Nova Semiold 24px
      </Text>
    <Text small bold ht4>
      Heading 6 - Proxima Nova Semiold 18px
      </Text>
    <Text small ht5> 
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </Text>
    <Text xSmall ht6>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </Text>

  </ThemeProvider>
);


export default {
  title: "Text",
  decorators: [withKnobs]
};
