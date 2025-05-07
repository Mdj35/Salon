import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Styled-components
const Section = styled.section`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  color: #2d2d2d;
  font-weight: 800;
  font-size: 1rem;
  margin-bottom: 0.75rem;
`;

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: 0" : "right: 0")};
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  padding: 0.75rem;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  color: #333;

  &:hover {
    background: #fff;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
  cursor: pointer;

  /* Flip effect */
  ${(props) =>
    props.isFlipped &&
    `
    transform: rotateY(180deg);
  `}
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg); /* Back side is rotated */
  background-color: #fafafa;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: #333;
`;

const CarouselItem = styled.div`
  flex-shrink: 0;
  background: #f9fafb;
  border-radius: 0.375rem;
  padding: 1rem;
  width: 160px;
  text-align: center;
  margin-right: 1rem;
`;

const Image = styled.img`
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
  width: 100%;
  height: 112px;
  object-fit: cover;
`;

const Text = styled.p`
  font-size: 0.75rem;
  font-weight: 800;
  color: #1f2937;
`;

const ServiceCarousel = ({ title, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});
  const [showNext, setShowNext] = useState(false);
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  const cardWidth = 176; // 160px + 16px margin

  const updateArrows = () => {
    const wrapperWidth = wrapperRef.current.offsetWidth;
    const contentWidth = trackRef.current.scrollWidth;
    const maxTranslate = contentWidth - wrapperWidth;
    const currentTranslate = currentIndex * cardWidth;

    setShowPrev(currentTranslate > 0);
    setShowNext(currentTranslate < maxTranslate);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [currentIndex, items]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    const maxIndex =
      items.length - Math.floor(wrapperRef.current.offsetWidth / cardWidth);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Section>
      <Title>{title}</Title>
      <CarouselWrapper ref={wrapperRef}>
        {showPrev && (
          <Button left onClick={handlePrev}>
            <FaChevronLeft />
          </Button>
        )}
        <CarouselTrack
          ref={trackRef}
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`,
          }}
        >
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <Image src={item.image} alt={item.alt} />
              <Text>{item.text}</Text>
            </CarouselItem>
          ))}
        </CarouselTrack>
        {showNext && (
          <Button onClick={handleNext}>
            <FaChevronRight />
          </Button>
        )}
      </CarouselWrapper>
    </Section>
  );
};

const servicesData = {
  cutting: [
    {
      image:
        "https://storage.googleapis.com/a1aa/image/cb70168e-a320-4f64-6cc4-9e4a04a14c95.jpg",
      alt: "Hair stylist cutting hair",
      text: "Cut with Style",
      description: "A stylish haircut for any occasion. Book now!",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/aa05a0b5-f626-4043-9d40-ff74457bf76f.jpg",
      alt: "Close-up of hair being cut",
      text: "Cut Only",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/1a3f0b6f-d8df-4e6c-6990-ab5a0c30328c.jpg",
      alt: "Hair being cut with clippers",
      text: "Cut / Clipper",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/20c8f362-bd49-430e-9ed1-03b12f5395f3.jpg",
      alt: "Close-up of hairline being trimmed",
      text: "TRIM (hair line only)",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/59bec4da-ee11-4232-37d9-4c3179350d93.jpg",
      alt: "Stylist trimming bangs",
      text: "Bang Trim",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/d3656461-4f19-436d-9ac7-f951f91cb21b.jpg",
      alt: "Close-up of split ends",
      text: "Split end Cutting",
    },
  ],
  treatments: [
    {
      image:
        "https://storage.googleapis.com/a1aa/image/55fe22c2-c95a-4827-e842-f5592ce6e963.jpg",
      alt: "Hair treatment product vials",
      text: "Semi Di Lino Vials",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/31337f02-ee74-4cbf-fa8e-3e273f5cfa46.jpg",
      alt: "Woman receiving deep conditioning treatment",
      text: "Deep Conditioning",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/39c21759-9ab7-493e-0a78-d46ba58d02a8.jpg",
      alt: "Hair reconstruction treatment",
      text: "Reconstruction Treatment",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/90c805f2-e021-4159-ba76-296bb8a7ee8f.jpg",
      alt: "Hair cauterization treatment",
      text: "Hair Cauterization",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/e7378e0f-52dd-4913-bbd4-364c32cf8523.jpg",
      alt: "Botox hair treatment",
      text: "Botox Hair Treatment",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/757ee031-c428-4155-d4e6-0cc2de9e6ed5.jpg",
      alt: "Keratin express hair treatment",
      text: "Keratin Express",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/f35f4779-be4a-4540-c273-0ec19fd5bfbf.jpg",
      alt: "Keratin hair treatment",
      text: "Keratin Treatment",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/e88ad1d0-19ec-4ebf-06b5-718ff17f50c9.jpg",
      alt: "Relaxer hair treatment",
      text: "Relaxer Treatment",
    },

    {
      image:
        "https://storage.googleapis.com/a1aa/image/5645cfd4-ff6e-43b8-5d5b-4c02fded1b92.jpg",
      alt: "Hair coloring",
      text: "Coloring",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/f8284fe3-d537-4937-b4e0-eab78b79ecf9.jpg",
      alt: "Color Correction",
      text: "Color Correction",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/d0c1711b-72b2-4d77-b08a-03d3da883993.jpg",
      alt: "Balayage",
      text: "Balayage",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/1a306682-fc66-4e5d-891f-bc1e2722a27c.jpg",
      alt: "Ombre coloring",
      text: "Ombre",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/1f362d62-3fd6-4935-8307-b1d30c6c9d0d.jpg",
      alt: "Highlights",
      text: "Highlights",
    },
  ],
  coloring: [
    {
      image:
        "https://storage.googleapis.com/a1aa/image/5645cfd4-ff6e-43b8-5d5b-4c02fded1b92.jpg",
      alt: "Hair coloring",
      text: "Coloring",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/f8284fe3-d537-4937-b4e0-eab78b79ecf9.jpg",
      alt: "Color correction",
      text: "Color Correction",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/d0c1711b-72b2-4d77-b08a-03d3da883993.jpg",
      alt: "Balayage",
      text: "Balayage",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/1a306682-fc66-4e5d-891f-bc1e2722a27c.jpg",
      alt: "Ombre coloring",
      text: "Ombre",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/1f362d62-3fd6-4935-8307-b1d30c6c9d0d.jpg",
      alt: "Highlights",
      text: "Highlights",
    },
  ],
  hairRemoval: [
    {
      image:
        "https://storage.googleapis.com/a1aa/image/f697e9b1-c720-48d2-7487-e5ac6ea8f17c.jpg",
      alt: "Facial Hair Removal",
      text: "Facial Hair Removal",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/9b7a8e7f-2ad9-40fe-8666-e3edbc6d55ac.jpg",
      alt: "Laser Hair Removal",
      text: "Laser Hair Removal",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/caa88cf1-d6e9-4558-91b4-11013da2d0c0.jpg",
      alt: "Underarm Hair Removal",
      text: "Underarm Hair Removal",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/9b62cc9e-dfdf-4d57-b5a6-e1bc926e7a92.jpg",
      alt: "Full Body Waxing",
      text: "Full Body Waxing",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/cc2333b7-c826-4d2c-941d-bf9d1f1078fe.jpg",
      alt: "Bikini Waxing",
      text: "Bikini Waxing",
    },
  ],
  coloring: [
    {
      image:
        "https://storage.googleapis.com/a1aa/image/5645cfd4-ff6e-43b8-5d5b-4c02fded1b92.jpg",
      alt: "Hair coloring",
      text: "Coloring",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/f8284fe3-d537-4937-b4e0-eab78b79ecf9.jpg",
      alt: "Color correction",
      text: "Color Correction",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/d0c1711b-72b2-4d77-b08a-03d3da883993.jpg",
      alt: "Balayage",
      text: "Balayage",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/1a306682-fc66-4e5d-891f-bc1e2722a27c.jpg",
      alt: "Ombre coloring",
      text: "Ombre",
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/1f362d62-3fd6-4935-8307-b1d30c6c9d0d.jpg",
      alt: "Highlights",
      text: "Highlights",
    },
  ],
};
const Services = () => {
  return (
    <div style={{ padding: "1rem", backgroundColor: "#fbb6ce" }}>
      <ServiceCarousel title="CUTTING" items={servicesData.cutting} />
      <ServiceCarousel
        title="HAIR TREATMENTS"
        items={servicesData.treatments}
      />
      <ServiceCarousel title="COLORING" items={servicesData.coloring} />
      <ServiceCarousel title="HAIR REMOVAL" items={servicesData.hairRemoval} />
    </div>
  );
};

export default Services;
