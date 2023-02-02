import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// import frontend variables
import {
  Colors,
  Height,
  Width,
  Margin,
  Radius,
} from "../../Utils/frontend_variables";

import trending1 from "../../Images/trending1.jpg";
import trending2 from "../../Images/trending2.jpg";
import trending3 from "../../Images/trending3.jpg";
import trending4 from "../../Images/trending4.jpg";

function TrendingSlideshow() {
  let trendingMovies = [
    {
      movieImage: `${trending1}`,
      movie: `The Dark Knight`,
      movieYear: `2008`,
    },
    {
      movieImage: `${trending2}`,
      movie: `Frozen II`,
      movieYear: `2019`,
    },
    {
      movieImage: `${trending3}`,
      movie: `Coco`,
      movieYear: `2017`,
    },
    {
      movieImage: `${trending4}`,
      movie: `Rio 2`,
      movieYear: `2014`,
    },
  ];

  return (
    <Container>
      <Row>
        
      </Row>
      <Row style={{
            height: `${Height.HEIGHT_CARD}`,
            alignContent: "center",
            justifyContent: "center",
          }}>
        <CardGroup
          style={{
            height: `${Height.HEIGHT_CARD}`,
            alignContent: "center",
            justifyContent: "center",
            position: "absolute",
            marginTop: `${Margin.MARGIN_CARD_TOP}`,
          }}
        >
          {trendingMovies.map((trending, index) => (
            <Card
              key={index}
              style={{
                width: `${Width.WIDTH_CARD}`,
                height: `${Height.HEIGHT_CARD}`,
                backgroundColor: `${Colors.COLORS_DARK_GRAY}`,
                borderWidth: `${Width.WIDTH_CARD_BORDER}`,
                borderRadius: `${Radius.RADIUS_CARD}`,
                borderColor: `${Colors.COLORS_WHITE}`,
              }}
              className={`${Margin.MARGIN_CARD_HORIZONTAL}`}
            >
              <Card.Img
                variant="top"
                src={trending.movieImage}
                style={{
                  width: `${Width.WIDTH_CARD_IMAGE}`,
                  height: `${Height.HEIGHT_CARD_IMAGE}`,
                  borderTopLeftRadius: `${Radius.RADIUS_TOP_CARD_IMAGE}`,
                  borderTopRightRadius: `${Radius.RADIUS_TOP_CARD_IMAGE}`,
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    color: `${Colors.COLORS_WHITE}`,
                  }}
                >
                  {trending.movie}
                </Card.Title>
                <Card.Text
                  style={{
                    color: `${Colors.COLORS_LIGHT_GRAY}`,
                  }}
                >
                  {trending.movieYear}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </Row>
    </Container>
  );
}

export default TrendingSlideshow;
