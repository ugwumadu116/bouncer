import React from "react";
import Container from "../services/styles";
import Text from "../text/index";
import Box from "./style";

const Subsection = props => {
  return (
    <Container>
      <div className="text-align">
        <Text>{props.title}</Text>
      </div>
      <div className="d-flex">
        {props.stocks.map((stock, i) => (
          <div key={i} className="d-flex">
            <div>
              <img src={stock.photo} alt="laptop" />
            </div>
            <Box className="p-3">
              <Text xSmall secondaryDarkColor>{stock.date}</Text>
              <Text small bold>{stock.name}</Text>
              <Text xSmall ht4>{stock.description}</Text>
            </Box>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Subsection;

Subsection.defaultProps = {
  stocks: [
    {
      id: 1,
      date: "01 Jan, 2015",
      name: "Typesetting industry",
      description:
        "Lorem Ipsum is simply dummy text of the printing and",
      photo:
        "https://res.cloudinary.com/decagonbouncer/image/upload/v1575976812/bouncer-frontend/tv_tray_c0ht3d.png"
    },
    {
      id: 1,
      date: "01 Jan, 2015",
      name: "Typesetting industry",
      description:
        "Lorem Ipsum is simply dummy text of the printing and",
      photo:
        "https://res.cloudinary.com/decagonbouncer/image/upload/v1575976812/bouncer-frontend/tv_tray_c0ht3d.png"
    },
    {
      id: 1,
      date: "01 Jan, 2015",
      name: "Typesetting industry",
      description:
        "Lorem Ipsum is simply dummy text of the printing and",
      photo:
        "https://res.cloudinary.com/decagonbouncer/image/upload/v1575976812/bouncer-frontend/tv_tray_c0ht3d.png"
    }
  ]
};
