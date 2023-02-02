import Carousel from "react-bootstrap/Carousel";

// import frontend variables
import { Colors, Height } from "../../Utils/frontend_variables";

// import images
const slide_one = require("../../Images/lordoftherings.jpeg");
const slide_two = require("../../Images/harrypotter.jpeg");
const slide_three = require("../../Images/marvel.jpeg");
const slide_four = require("../../Images/dc.jpeg");
const slide_five = require("../../Images/avatar.jpeg");
const slide_six = require("../../Images/jurassicworld.jpeg");

function SlideshowHome() {
  const slideshowImages = [
    {
      className: "d-block w-100",
      src: `${slide_one}`,
      alt: "First Slide",
    },
    {
      className: "d-block w-100",
      src: `${slide_two}`,
      alt: "Second Slide",
    },
    {
      className: "d-block w-100",
      src: `${slide_three}`,
      alt: "Third Slide",
    },
    {
      className: "d-block w-100",
      src: `${slide_four}`,
      alt: "Fourth Slide",
    },
    {
      className: "d-block w-100",
      src: `${slide_five}`,
      alt: "Fifth Slide",
    },
    {
      className: "d-block w-100",
      src: `${slide_six}`,
      alt: "Sixth Slide",
    },
  ];

  return (
    <Carousel
      style={{
        backgroundColor: `${Colors.COLORS_DARK_GRAY}`,
        height: `${Height.HEIGHT_SLIDESHOW}`,
        alignContent: "center",
        justifyContent: "center",
        opacity: 0.6,
        position: "absolute",
        zIndex: 0,
      }}
    >
      {slideshowImages.map((slideImage, index) => (
        <Carousel.Item key={index}>
          <img
            className={slideImage.className}
            src={slideImage.src}
            alt={slideImage.alt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default SlideshowHome;
