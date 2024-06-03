import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

function ProductColor({ colors, setColors, index, color }) {
  const existingColor = color ?? "";
  const [enteredColor, setEnteredColor] = useState(existingColor);

  const deleteColor = () => {
    const newColors = colors.filter((color, idx) => {
      return idx !== index;
    });

    setColors(newColors);
  };

  const colorChangeHandler = (e) => {
    setEnteredColor(e.target.value);
    colors[index] = e.target.value;
  };


  return (
    <div className="flex items-center overflow-hidden rounded-[5px]">
      <input
        className="text-sm w-[130px] pl-[25px] rounded-[5px] px-1 outline-none  h-[30px]"
        value={enteredColor}
        onChange={colorChangeHandler}
      />
      <div className="flex justify-center items-center mr-[-20px] h-full w-[20px] cursor-pointer hover:bg-gray-200 transition-colors">
        <IoClose onClick={deleteColor} />
      </div>
    </div>
  );
}

export default ProductColor;
