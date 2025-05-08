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
  ],
  coloring: [
    // ✅ keep only this block, remove any duplicates
    {
      image:
        "https://blog.wella.com/sites/default/files/small-image/wellaproblogbrownhaircolorsupdateimage19_1.jpg",
      alt: "Hair coloring",
      text: "Coloring",
    },
    {
      image:
        "https://blog.wella.com/sites/default/files/big-image/how-you-do-perfect-hair-color-correction-9dc06819.png",
      alt: "Color correction",
      text: "Color Correction",
    },
    {
      image:
        "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2015/08/7-long-caramel-balayage-for-brunettes.jpg?resize=750%2C937&ssl=1",
      alt: "Balayage",
      text: "Balayage",
    },
    {
      image:
        "https://sinimangatt.com/cdn/shop/articles/Ombre_Blog_Sinima_Salon_1600x.png?v=1600758903",
      alt: "Ombre coloring",
      text: "Ombre",
    },
  ],
  hairRemoval: [
    // ✅ leave this as-is
    {
      image:
        "https://www.colairbeautylounge.com/wp-content/uploads/2024/02/mens-facial-hair-removal-guide-colair-beauty-lounge-6.jpg",
      alt: "Facial Hair Removal",
      text: "Facial Hair Removal",
    },
    {
      image:
        "https://www.sctimes.com/gcdn/presto/2023/08/03/PSTC/67090709-70cc-4d72-81f4-69e21f4380be-Picture1.jpg",
      alt: "Laser Hair Removal",
      text: "Laser Hair Removal",
    },
    {
      image:
        "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322090/woman-having-laser-hair-removal-on-her-armpit.jpg",
      alt: "Underarm Hair Removal",
      text: "Underarm Hair Removal",
    },
    {
      image:
        "https://allurebodybar.com/wp-content/uploads/2024/01/mud-treatments-spa-1-scaled.jpg",
      alt: "Full Body Waxing",
      text: "Full Body Waxing",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtI8aepHR8lgZGgfH516Cu2KLl9UPLDuKfmQ&s",
      alt: "Bikini Waxing",
      text: "Bikini Waxing",
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
