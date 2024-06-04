"use client";

import { IoTriangleSharp } from "react-icons/io5";
import { VscTriangleLeft } from "react-icons/vsc";

export const Thumb = (props) => {
  const { selected, onClick } = props;

  return (
    <div
      className={"ltr BottomEmbla-thumbs__slide".concat(
        selected ? " BottomEmbla-thumbs__slide--selected" : ""
      )}
    >
      <VscTriangleLeft
        className={selected ? "triangle--selected" : "triangle"}
      />
      <button
        onClick={onClick}
        className="BottomEmbla-thumbs__slide__button "
        type="button"
      >
        <p>کنسول بازی سونی PS5 Slim</p>
      </button>
    </div>
  );
};
