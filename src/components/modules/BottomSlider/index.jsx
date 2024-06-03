"use client";
import BottomEmblaCarousel from "./BottomEmblaCarousel";
import "./BottomEmblaCarousel.css";

const OPTIONS = {};
// count shouldn't be more than 10 otherwise you also need to modify the styling
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const BottomEmblaCarouselIndex = () => (
  <BottomEmblaCarousel slides={SLIDES} options={OPTIONS} />
);

export default BottomEmblaCarouselIndex;
