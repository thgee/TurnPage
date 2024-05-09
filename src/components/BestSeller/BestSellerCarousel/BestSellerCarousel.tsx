import Slider from "react-slick";
import * as Style from "./styles";
import BestSellerPreview from "../BestSellerPreview/BestSellerPreview";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSellerCarousel = ({ bestSellers }: { bestSellers: any[] }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <Style.RightBracketIcon />,
    prevArrow: <Style.LeftBracketIcon />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div className="slider-container" style={{ margin: "50px 0" }}>
      <Slider {...settings}>
        {bestSellers.map((info, i) => (
          <BestSellerPreview key={i} bookInfo={info} />
        ))}
      </Slider>
    </div>
  );
};

export default BestSellerCarousel;
