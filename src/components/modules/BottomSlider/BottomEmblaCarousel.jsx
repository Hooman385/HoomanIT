"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import imageByIndex from "./imageByIndex";
import "./BottomEmblaCarousel.css";
import { RxTriangleDown } from "react-icons/rx";
import SlideTemplate from "./SlideTemplate";

import Autoplay from "embla-carousel-autoplay";

const BottomEmblaCarousel = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplayOptions = {
    stopOnInteraction: false,
    playOnInit: true,
    delay: 6000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="relative BottomEmbla ltr bg-white rounded-b-[8px] border-t-4 border-t-pink-500 shadow-2xl">
      <div className="BottomEmbla__viewport" ref={emblaMainRef}>
        <div className="BottomEmbla__container">
          {slides.map((index) => (
            <div className="BottomEmbla__slide" key={index}>
              <SlideTemplate />
            </div>
          ))}
        </div>
      </div>

      <div className="BottomEmbla-thumbs relative">
        <RxTriangleDown className="top-triangle" />
        <div className="BottomEmbla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="BottomEmbla-thumbs__container">
            <h2 className="text-pink-600 text-center text-lg mt-4">
              پیشنهاد ویژه
            </h2>
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgSrc={imageByIndex(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomEmblaCarousel;
