"use client";
import useEmblaCarousel from "embla-carousel-react";
import "./ProductSlider.css";
import FeaturedCard from "../FeaturedProducts/FeaturedCard";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const ProductSlider = (props) => {
  const { slides, title } = props;

  const autoplayOptions = {
    
    stopOnInteraction: false,
    playOnInit: true,
    delay: 6000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };
  const options = {
    loop: true,
    align: "start",
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="productSlider ltr relative ">
      <div className="productSlider__viewport ltr" ref={emblaRef}>
        <div className="productSlider__container ltr">
          {slides?.map((index) => (
            <div className="productSlider__slide" key={index}>
              <FeaturedCard />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between absolute right-0 left-0 top-0 bottom-0 m-auto h-fit w-[98%]">
        <button
          className="embla__prev  rounded-full bg-[#454545] opacity-80"
          onClick={scrollPrev}
        >
          <RiArrowLeftSLine size={35} color="white" />
        </button>
        <button
          className="embla__next  rounded-full bg-[#454545] opacity-80"
          onClick={scrollNext}
        >
          <RiArrowRightSLine size={35} color="white" />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
