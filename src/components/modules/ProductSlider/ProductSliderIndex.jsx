"use client";
import ProductSlider from "./ProductSlider";
import "./ProductSlider.css";

const OPTIONS = { slidesToScroll: "auto", containScroll: "trimSnaps" };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const ProductSliderIndex = ({ title }) => (
  <ProductSlider slides={SLIDES} options={OPTIONS} />
);

export default ProductSliderIndex;
