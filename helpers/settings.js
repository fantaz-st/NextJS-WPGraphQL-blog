import { IconButton } from '@mui/material';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const leftArrowStyle = {
  left: '-15px',
  position: 'absolute',
  top: '50%',
  zIndex: '2',
  transform: 'translate(0, -50%)',
  height: '40px',
  width: '40px',
  fontSize: '1.5rem',
  backgroundColor: '#fff',
  boxShadow: '-1px 1px 3px 0 rgba(1,1,1,.1)',
};
const rightArrowStyle = {
  right: '-15px',
  position: 'absolute',
  top: '50%',
  zIndex: '2',
  transform: 'translate(0, -50%)',
  height: '40px',
  width: '40px',
  fontSize: '1.5rem',
  backgroundColor: '#fff',
  boxShadow: '1px 1px 3px 0 rgba(1,1,1,.1)',
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton onClick={onClick} sx={leftArrowStyle}>
      <FaChevronLeft />
    </IconButton>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton onClick={onClick} sx={rightArrowStyle}>
      <FaChevronRight />
    </IconButton>
  );
}

const SlickArrowRight = () => {
  return (
    <IconButton>
      <FaChevronRight />
    </IconButton>
  );
};

export const postSlickSliderSettings = {
  className: 'posts-slick',
  dots: true,
  autoplay: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: 'ease-out',
  fade: false,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const heroSlickSliderSettings = {
  className: 'hero-slick',
  dots: true,
  dotsClass: 'hero-slick-dots',
  autoplay: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
};
