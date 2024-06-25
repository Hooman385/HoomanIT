"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./ProductImagesSliderThumbButton";
import "./css/ProductImagesSlider.css";
import Image from "next/image";

const ProductImagesSlider = ({ productImages }) => {
  const options = {};

  // const images = [
  //   "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/296114/pexels-photo-296114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/14021830/pexels-photo-14021830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
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
    <div className="product-carousel">
      <div className="product-carousel__viewport ltr" ref={emblaMainRef}>
        <div className="product-carousel__container ">
          {productImages.map((image, index) => (
            <div
              key={index}
              className="product-carousel__slide relative w-[400px] h-[300px]"
            >
              <Image
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                src={image.url}
                alt="current product image"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="product-carousel-thumbs">
        <div className="product-carousel-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="product-carousel-thumbs__container flex gap-1 ">
            {productImages.map((image, index) => (
              <div
                key={index}
                className="relative w-[70px] h-[50px] cursor-pointer "
                onClick={() => onThumbClick(index)}
              >
                <Image
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={image.url}
                  alt="product images thumbnail"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImagesSlider;
