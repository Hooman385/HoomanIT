"use client";

import useEmblaCarousel from "embla-carousel-react";
import { DotButton } from "./EmblaCarouselArrowsDotsButtons";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

import { useCallback, useEffect, useState } from "react";

export const EmblaCarousel = (props) => {
  const autoplayOptions = {
    stopOnInteraction: false,
    playOnInit: true,
    delay: 6000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div
      className="relative embla ltr mx-auto rounded-xl shadow-2xl"
      ref={emblaRef}
    >
      <div className="embla__container">
        <div className="embla__slide">
          <Image
            src="/1.jpeg"
            fill
            alt="slider image 1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* <img src="1.jpeg" alt="" /> */}
        </div>
        <div className="embla__slide">
          <Image
            src="/2.jpeg"
            fill
            alt="slider image 2"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* <img src="2.jpeg" alt="" /> */}
        </div>
        <div className="embla__slide">
          <Image
            src="/3.jpg"
            fill
            alt="slider image 3"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* <img src="3.jpg" alt="" /> */}
        </div>
      </div>
      <div className="flex justify-between absolute right-0 left-0 top-0 bottom-0 m-auto h-fit w-[98%]">
        <button
          className="embla__prev  rounded-full bg-[#f43b86] opacity-80"
          onClick={scrollPrev}
        >
          <RiArrowLeftSLine size={55} color="white" />
        </button>
        <button
          className="embla__next  rounded-full bg-[#f43b86] opacity-80"
          onClick={scrollNext}
        >
          <RiArrowRightSLine size={55} color="white" />
        </button>
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </div>
  );
};
