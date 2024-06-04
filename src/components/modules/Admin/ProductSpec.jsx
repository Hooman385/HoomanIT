"use client";

import { useState } from "react";

function ProductSpec({ specs, setSpecs, index }) {
  const prevKey = Object.keys(specs[index])[0] ?? "";
  const prevValue = specs[index][prevKey] ?? "";

  const [enteredKey, setEnteredKey] = useState(prevKey);
  const [enteredValue, setEnteredValue] = useState(prevValue);

  const keyChangeHandler = (e) => {
    setEnteredKey(e.target.value);
    specs[index] = { [e.target.value]: [enteredValue] };
  };

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
    specs[index] = { [enteredKey]: e.target.value };
  };

  const deleteHandler = () => {
    const filteredSpecs = specs.filter((spec, idx) => idx !== index);
    setSpecs(filteredSpecs);
  };

  return (
    <div className="flex items-end gap-3">
      <div className="">
        <p>نام مشخصه</p>
        <input
          name="enteredKey"
          className="h-[30px] rounded-[8px]"
          type="text"
          value={enteredKey}
          onChange={keyChangeHandler}
        />
      </div>

      <div className=" w-full">
        <p>مقدار مشخصه</p>
        <input
          name="enteredValue"
          type="text"
          className="w-full h-[30px] rounded-[8px]"
          value={enteredValue}
          onChange={valueChangeHandler}
        />
      </div>

      <button
        onClick={deleteHandler}
        className="bg-pink-500 hover:bg-pink-600 transition-colors w-[100px] h-[30px]  rounded-[8px] text-white"
      >
        حذف
      </button>
    </div>
  );
}

export default ProductSpec;
